<?php
namespace App\Http\Controllers;

use App\ChristmasCalendarParticipant;
use App\ChristmasCalendarTask;
use App\Http\Controllers\Admin\MediaController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\URL;
use Log;

class ChristmasCalendarController extends Controller
{
    public function __construct() {
        parent::__construct();

        Log::useDailyFiles(storage_path().'/logs/holiday-calendar.log');
    }

    const ALLOWED_ACCOUNTS = [70134, 186047, 82627, 191210, 69468, 185056];
    const CALENDAR_YEARS = [2019, 2020, 2021];

    public function getView($year)   {
        if (!in_array($year, self::CALENDAR_YEARS)) {
            return abort(404);
        }

        if (in_array(session('logged_user')['id'], self::ALLOWED_ACCOUNTS)) {
        //if (strtotime('12/01/2019') < time()) {
            if ((new UserController())->checkSession()) {
                $dcnAmount = 0;
                $ticketAmount = 0;
                $bonusTickets = 0;
                $participant = ChristmasCalendarParticipant::where(array('user_id' => session('logged_user')['id'], 'year' => $year))->get()->first();
                $allTasksForThisYear = $this->getAllTasksByYear($year);

                if (empty($participant)) {
                    // create participant
                    $participant = new ChristmasCalendarParticipant();
                    $participant->user_id = session('logged_user')['id'];
                    $participant->year = $year;
                    $participant->save();

                    // just created participant should not have any passed tasks
                } else {
                    $passedTasks = DB::connection('mysql')->table('christmas_calendar_task_participant')
                        ->select('christmas_calendar_task_participant.*')
                        ->leftJoin('christmas_calendar_participants', 'christmas_calendar_task_participant.participant_id', '=', 'christmas_calendar_participants.id')
                        ->where(array('christmas_calendar_task_participant.participant_id' => $participant->id, 'christmas_calendar_task_participant.disqualified' => 0, 'christmas_calendar_participants.year' => $year))
                        ->whereRaw('christmas_calendar_task_participant.task_id >= ' . $allTasksForThisYear[0]['id'])
                        ->whereRaw('christmas_calendar_task_participant.task_id <= ' . $allTasksForThisYear[sizeof($allTasksForThisYear) - 1]['id'])->get()->toArray();

                    if (!empty($passedTasks)) {
                        foreach($passedTasks as $passedTask) {
                            if (!empty($passedTask->custom_reward_type) && !empty($passedTask->took_custom_reward)) {
                                if ($passedTask->custom_reward_type == 'dcn-reward') {
                                    $dcnAmount += $passedTask->custom_reward_value;
                                } else if ($passedTask->custom_reward_type == 'ticket-reward') {
                                    $ticketAmount += $passedTask->custom_reward_value;
                                }
                            } else {
                                $taskRecord = ChristmasCalendarTask::where(array('id' => $passedTask->task_id, 'year' => $year))->get()->first();
                                if (!empty($taskRecord)) {
                                    if ($taskRecord->type == 'dcn-reward') {
                                        $dcnAmount += $taskRecord->value;
                                    } else if ($taskRecord->type == 'ticket-reward') {
                                        $ticketAmount += $taskRecord->value;
                                    }

                                    $datePassedTask = new \DateTime($passedTask->created_at);
                                    $dateDiff = strtotime($taskRecord->date) - strtotime($datePassedTask->format('Y-m-d'));
                                    $difference = floor($dateDiff / (60*60*24));
                                    if ($difference == 0) {
                                        $bonusTickets += 1;
                                    }
                                }
                            }
                        }
                    }
                }


                $spinningWheelTasks = ChristmasCalendarTask::where(array('type' => 'spinning-wheel', 'year' => $year))->get()->all();
                $timeLeftForNextSpinningWheel = 0;
                foreach ($spinningWheelTasks as $task) {
                    if (strtotime($task->date) > time()) {
                        $timeLeftForNextSpinningWheel = strtotime($task->date) - time();
                    }
                }

                $pageData = ['tasks' => $allTasksForThisYear, 'dcnAmount' => $dcnAmount, 'ticketAmount' => $ticketAmount, 'bonusTickets' => $bonusTickets, 'participant' => $participant, 'year' => $year];
                if ($timeLeftForNextSpinningWheel != 0) {
                    $pageData['timeLeftForNextSpinningWheel'] = $timeLeftForNextSpinningWheel;
                }

                return view('pages/logged-user/christmas-calendar-logged', $pageData);
            } else {
                return view('pages/christmas-calendar');
            }
        } else {
            return abort(404);
        }
    }

    public function getChristmasCalendarTermsView()   {
        return view('pages/holiday-calendar-terms');
    }

    public function getAllTasksByYear($year) {
        return ChristmasCalendarTask::where(array('year' => $year))->get()->all();
    }

    public function getTaskPopup($year, $id, Request $request) {
        if ((new UserController())->checkSession() && in_array(session('logged_user')['id'], self::ALLOWED_ACCOUNTS)) {
        //if ((new UserController())->checkSession() /*&& strtotime('12/01/2019') < time()*/) {
            $task = ChristmasCalendarTask::where(array('id' => $id, 'year' => $year))->get()->first();

            //$participant = ChristmasCalendarParticipant::where(array('user_id' => session('logged_user')['id']))->get()->first();
            $participant = ChristmasCalendarParticipant::where(array('user_id' => session('logged_user')['id'], 'year' => $year))->get()->first();
            $checkIfTaskIsAlreadyFinished = $this->checkIfTaskIsAlreadyFinished($task->id, $participant->id, $task->year);
            if ($checkIfTaskIsAlreadyFinished) {
                $coredbData = (new APIRequestsController())->getUserData(session('logged_user')['id']);

                $view = view('partials/christmas-calendar-task-'.$year, ['task' => $task, 'year' => $year, 'type' => 'already-completed', 'coredbData' => $coredbData, 'finishedTask' => $checkIfTaskIsAlreadyFinished]);
                $view = $view->render();
                return response()->json(['error' => $view]);
            }

            if (strtotime('2022/01/02 00:00:00') < time()) {
                $view = view('partials/christmas-calendar-task-'.$year, ['task' => $task, 'year' => $year, 'type' => 'campaign-expired']);
                $view = $view->render();
                return response()->json(['error' => $view]);
            }

            if (time() > strtotime($task->date)) {
                // check if user completed the tasks before this one
                $passedTasks = DB::connection('mysql')->table('christmas_calendar_task_participant')
                    ->select('christmas_calendar_task_participant.*')
                    ->leftJoin('christmas_calendar_participants', 'christmas_calendar_task_participant.participant_id', '=', 'christmas_calendar_participants.id')
                    ->where(array('christmas_calendar_task_participant.participant_id' => $participant->id, 'christmas_calendar_participants.year' => $year, 'took_custom_reward' => 1))
                    ->whereRaw('christmas_calendar_task_participant.task_id >= ' . 1)
                    ->whereRaw('christmas_calendar_task_participant.task_id <= ' . $task->id)->get()->toArray();

                $dayId = date('j', strtotime($task->date));
                if (sizeof($passedTasks) != (int)$dayId - 1) {
                    $view = view('partials/christmas-calendar-task-'.$year, ['task' => $task, 'year' => $year, 'type' => 'no-hurries']);
                    $view = $view->render();
                    return response()->json(['error' => $view]);
                }

                $finishedTask = DB::table('christmas_calendar_task_participant')
                    ->select('christmas_calendar_task_participant.*')
                    ->where(array('task_id' => $id, 'participant_id' => $participant->id, 'took_custom_reward' => 0))
                    ->get()->first();

                $viewParams = ['task' => $task, 'year' => $year, 'type' => 'task'];
                if (!empty($finishedTask)) {
                    $rewards = ['5000-dcn', 'daily-vox-pass', '3-raffle-tickets', '15000-dcn'];
                    if ($finishedTask->custom_reward_type == 'dcn-reward' && $finishedTask->custom_reward_value == 5000) {
                        $tempValue = $rewards[0];
                        unset($rewards[0]);
                    } else if ($finishedTask->custom_reward_type == 'dv-pass') {
                        $tempValue = $rewards[1];
                        unset($rewards[1]);
                    } else if ($finishedTask->custom_reward_type == 'ticket-reward') {
                        $tempValue = $rewards[2];
                        unset($rewards[2]);
                    } else if ($finishedTask->custom_reward_type == 'dcn-reward' && $finishedTask->custom_reward_value == 15000) {
                        $tempValue = $rewards[3];
                        unset($rewards[3]);
                    }

                    $rewards = array_values($rewards);
                    array_push($rewards, $tempValue);

                    $viewParams['finishedTask'] = $finishedTask;
                    $viewParams['rewards'] = json_encode($rewards);
                }

                if ($task->id == 96 || $task->id == 106) {
                    $mobile = $request->input('mobile');
                    $imgName = '';
                    if ($task->id == 96) {
                        if (isset($mobile) && !empty($mobile)) {
                            $imgName = 'puzzle-day-16-mobile.png';
                        } else {
                            $imgName = 'puzzle-day-16.png';
                        }
                    } else if ($task->id == 106) {
                        if (isset($mobile) && !empty($mobile)) {
                            $imgName = 'puzzle-day-26-mobile.png';
                        } else {
                            $imgName = 'puzzle-day-26.png';
                        }
                    }
                    list($mb_team_pic_width, $mb_team_pic_height) = getimagesize(URL::asset('assets/images/christmas-calendar-campaign/' . $imgName));

                    $rows = 4;
                    $columns = 4;
                    $piece_count = $rows * $columns;

                    $piece_width = $mb_team_pic_width / $columns;
                    $piece_height = $mb_team_pic_height / $rows;

                    $array = [];
                    for($y = 0; $y < $rows; $y += 1) {
                        for($x = 0; $x < $columns; $x += 1) {
                            $i = $x  + ($y * $columns);
                            array_push($array, '<div id="drag' . $i . '" style="display:block; background: transparent url(/assets/images/christmas-calendar-campaign/'.$imgName.') no-repeat scroll ' . (- $x * $piece_width) . 'px ' . (- $y * $piece_height) . 'px; width: ' . $piece_width . 'px; height: ' . $piece_height . 'px; " class="draggable-square" draggable="true" ondragstart="drag(event)"></div>');
                        }
                    }
                    shuffle($array);

                    $piecesHtml = '';
                    for($i = 0; $i < $piece_count; $i+=1)  {
                        $piecesHtml .= $array[$i];
                    }
                    $viewParams['piece_count'] = $piece_count;
                    $viewParams['piecesHtml'] = $piecesHtml;
                    $viewParams['piece_width'] = $piece_width;
                    $viewParams['piece_height'] = $piece_height;
                }

                $view = view('partials/christmas-calendar-task-'.$year, $viewParams);
                $view = $view->render();
                return response()->json(['success' => $view, 'year' => $year]);
            } else {
                $view = view('partials/christmas-calendar-task-'.$year, ['task' => $task, 'year' => $year, 'type' => 'not-active-yet']);
                $view = $view->render();
                return response()->json(['error' => $view]);
            }
        } else {
            return abort(404);
        }
    }

    public function completeTask($year, $id, Request $request) {
        if ((new UserController())->checkSession() && in_array(session('logged_user')['id'], self::ALLOWED_ACCOUNTS)) {
        //if ((new UserController())->checkSession() && strtotime('12/01/2020') < time()) {
            $task = ChristmasCalendarTask::where(array('id' => $id))->get()->first();
            $participant = ChristmasCalendarParticipant::where(array('user_id' => session('logged_user')['id'], 'year' => $year))->get()->first();
            $coredbData = (new APIRequestsController())->getUserData(session('logged_user')['id']);

            // check if time passed to unlock this task
            if (time() > strtotime($task->date)) {
                if ((int)$id > 1) {
                    // check if user completed the tasks before this one
                    $passedTasks = DB::connection('mysql')->table('christmas_calendar_task_participant')
                        ->leftJoin('christmas_calendar_participants', 'christmas_calendar_task_participant.participant_id', '=', 'christmas_calendar_participants.id')
                        ->select('christmas_calendar_task_participant.*')
                        ->where(array('christmas_calendar_task_participant.participant_id' => $participant->id, 'christmas_calendar_participants.year' => $year))
                        ->whereRaw('christmas_calendar_task_participant.task_id >= ' . 1)
                        ->whereRaw('christmas_calendar_task_participant.task_id <= ' . $task->id)->get()->toArray();

                    $dayId = date('j', strtotime($task->date));

                    if (sizeof($passedTasks) != (int)$dayId - 1) {
                        $view = view('partials/christmas-calendar-task-'.$year, ['task' => $task, 'year' => $year, 'type' => 'no-hurries']);
                        $view = $view->render();
                        return response()->json(['error' => $view]);
                    }
                }

                if ($this->checkIfTaskIsAlreadyFinished($task->id, $participant->id, $task->year)) {
                    $view = view('partials/christmas-calendar-task-'.$year, ['task' => $task, 'year' => $year, 'type' => 'already-completed', 'coredbData' => $coredbData]);
                    $view = $view->render();
                    return response()->json(['error' => $view]);
                } else {
                    $insert_arr = array(
                        'participant_id' => $participant->id,
                        'task_id' => $task->id,
                        'created_at' => new \DateTime()
                    );

                    if ($task->type == 'spinning-wheel') {
                        $rewards = ['5000-dcn', 'daily-vox-pass', '3-raffle-tickets', '15000-dcn'];
                        $rewardsChances = array(
                            array(1, 40, $rewards[0]),
                            array(41, 60, $rewards[1]),
                            array(61, 90, $rewards[2]),
                            array(91, 100, $rewards[3])
                        );

                        $randomNumber = rand(1, 100);
                        foreach ($rewardsChances as $rewardsChance) {
                            if ($rewardsChance[0] <= $randomNumber && $randomNumber <= $rewardsChance[1]) {
                                if ($rewardsChance[2] == '5000-dcn') {
                                    $insert_arr['custom_reward_type'] = 'dcn-reward';
                                    $insert_arr['custom_reward_value'] = 5000;

                                    $tempValue = $rewards[0];
                                    unset($rewards[0]);
                                } else if ($rewardsChance[2] == 'daily-vox-pass') {
                                    $insert_arr['custom_reward_type'] = 'dv-pass';

                                    $tempValue = $rewards[1];
                                    unset($rewards[1]);
                                } else if ($rewardsChance[2] == '3-raffle-tickets') {
                                    $insert_arr['custom_reward_type'] = 'ticket-reward';
                                    $insert_arr['custom_reward_value'] = 3;

                                    $tempValue = $rewards[2];
                                    unset($rewards[2]);
                                } else if ($rewardsChance[2] == '15000-dcn') {
                                    $insert_arr['custom_reward_type'] = 'dcn-reward';
                                    $insert_arr['custom_reward_value'] = 15000;

                                    $tempValue = $rewards[3];
                                    unset($rewards[3]);
                                }
                                $insert_arr['took_custom_reward'] = false;
                                $rewards = array_values($rewards);
                                array_push($rewards, $tempValue);
                                break;
                            }
                        }
                    }

                    $screenshotProof = $request->file('screenshot_proof');
                    if (!empty($screenshotProof)) {
                        $allowed = array('jpeg', 'png', 'jpg', 'JPEG', 'PNG', 'JPG');

                        $arrayWithScreenshotNames = array();
                        if (is_array($screenshotProof)) {
                            foreach($screenshotProof as $file) {
                                if (!in_array(pathinfo($file->getClientOriginalName(), PATHINFO_EXTENSION), $allowed)) {
                                    return json_encode(array('error' => 'Screenshots can be only with jpeg, png or jpg formats.', 'technicalError' => true));
                                }

                                if ($file->getSize() > 2097152) {
                                    return json_encode(array('error' => 'Screenshots can be only with maximum size of 2MB.', 'technicalError' => true));
                                }

                                $filename = (new MediaController())->getMediaNameWithoutExtension($file->getClientOriginalName()) . '-' . time() . '.' . pathinfo($file->getClientOriginalName(), PATHINFO_EXTENSION);
                                move_uploaded_file($file->getPathName(), SCREENSHOT_PROOFS . $filename);

                                array_push($arrayWithScreenshotNames, $filename);
                            }
                        } else {
                            if (!in_array(pathinfo($screenshotProof->getClientOriginalName(), PATHINFO_EXTENSION), $allowed)) {
                                return json_encode(array('error' => 'Screenshots can be only with jpeg, png or jpg formats.', 'technicalError' => true));
                            }

                            if ($screenshotProof->getSize() > 2097152) {
                                return json_encode(array('error' => 'Screenshots can be only with maximum size of 2MB.', 'technicalError' => true));
                            }

                            $filename = (new MediaController())->getMediaNameWithoutExtension($screenshotProof->getClientOriginalName()) . '-' . time() . '.' . pathinfo($screenshotProof->getClientOriginalName(), PATHINFO_EXTENSION);
                            move_uploaded_file($screenshotProof->getPathName(), SCREENSHOT_PROOFS . $filename);

                            array_push($arrayWithScreenshotNames, $filename);
                        }

                        $insert_arr['screenshot_proof'] = serialize($arrayWithScreenshotNames);
                    }

                    $textProof = $request->input('text_proof');
                    if (!empty($textProof))   {
                        $insert_arr['text_proof'] = $textProof;
                    }

                    $emailsArray = $request->input('emailsArray');
                    if (!empty($emailsArray) && is_array($emailsArray)) {
                        $insert_arr['text_proof'] = json_encode($emailsArray);
                    }

                    //INSERT
                    DB::table('christmas_calendar_task_participant')->insert($insert_arr);

                    $emailsArray = $request->input('emailsArray');
                    if (!empty($emailsArray) && is_array($emailsArray)) {
                        (new APIRequestsController())->sendChristmasTemplate(json_encode($emailsArray));
                    }

                    if ($task->type == 'treasure-piece-3') {
                        // adding one day VIP DV access
                        Log::info('grantVipDVAccess request.');
                        $grantVipDVAccess = (new APIRequestsController())->grantVipDVAccess(array('vip_access' => true, 'vip_access_until' => date('Y-m-d H:i:s', strtotime('+1 day'))));
                        Log::info('grantVipDVAccess response.', ['response' => json_encode($grantVipDVAccess)]);
                    }

                    $finishedTask = DB::table('christmas_calendar_task_participant')
                        ->select('christmas_calendar_task_participant.*')
                        ->where(array('participant_id' => $participant->id, 'task_id' => $task->id))
                        ->get()->first();

                    $dcnAmount = 0;
                    $ticketAmount = 0;
                    $bonusTickets = 0;
                    $participant = ChristmasCalendarParticipant::where(array('user_id' => session('logged_user')['id'], 'year' => $year))->get()->first();
                    $allTasksForThisYear = $this->getAllTasksByYear($year);
                    $passedTasks = DB::connection('mysql')->table('christmas_calendar_task_participant')->select('christmas_calendar_task_participant.*')->where(array('christmas_calendar_task_participant.participant_id' => $participant->id, 'christmas_calendar_task_participant.disqualified' => 0))->whereRaw('christmas_calendar_task_participant.task_id >= ' . $allTasksForThisYear[0]['id'])->whereRaw('christmas_calendar_task_participant.task_id <= ' . $allTasksForThisYear[sizeof($allTasksForThisYear) - 1]['id'])->get()->toArray();

                    foreach($passedTasks as $passedTask) {
                        if (!empty($passedTask->custom_reward_type) && !empty($passedTask->took_custom_reward)) {
                            if ($passedTask->custom_reward_type == 'dcn-reward') {
                                $dcnAmount += $passedTask->custom_reward_value;
                            } else if ($passedTask->custom_reward_type == 'ticket-reward') {
                                $ticketAmount += $passedTask->custom_reward_value;
                            }
                        } else {
                            $taskRecord = ChristmasCalendarTask::where(array('id' => $passedTask->task_id))->get()->first();
                            if (!empty($taskRecord)) {
                                if ($taskRecord->type == 'dcn-reward') {
                                    $dcnAmount += $taskRecord->value;
                                } else if ($taskRecord->type == 'ticket-reward') {
                                    $ticketAmount += $taskRecord->value;
                                }

                                $datePassedTask = new \DateTime($passedTask->created_at);
                                $dateDiff = strtotime($taskRecord->date) - strtotime($datePassedTask->format('Y-m-d'));
                                $difference = floor($dateDiff / (60*60*24));
                                if ($difference == 0) {
                                    $bonusTickets += 1;
                                }
                            }
                        }
                    }

                    $doubleAmount = false;
                    if ($bonusTickets == 31) {
                        $doubleAmount = true;
                        $dcnAmount *= 2;
                    }

                    $responseData = ['data' => $coredbData->slug, 'year' => $year, 'dcnAmount' => $dcnAmount, 'ticketAmount' => $ticketAmount, 'bonusTickets' => $bonusTickets, 'doubleAmount' => $doubleAmount, 'finishedTask' => $finishedTask];
                    if ($task->type == 'spinning-wheel') {
                        $responseData['success'] = true;
                    } else {
                        $view = view('partials/christmas-calendar-task-'.$year, ['task' => $task, 'year' => $year, 'type' => 'congrats', 'coredbData' => $coredbData, 'finishedTask' => $finishedTask]);
                        $view = $view->render();
                        $responseData['success'] = $view;
                    }

                    if (isset($rewards) && !empty($rewards)) {
                        $responseData['rewards'] = $rewards;
                    }
                    return response()->json($responseData);
                }
            } else {
                $view = view('partials/christmas-calendar-task-'.$year, ['task' => $task, 'year' => $year, 'type' => 'not-active-yet']);
                $view = $view->render();
                return response()->json(['error' => $view]);
            }
        } else {
            return abort(404);
        }
    }

    public function completeTaskAlreadyCompletedTask($year, $id) {
        if ((new UserController())->checkSession() && strtotime('12/01/2020') < time()) {
            $participant = ChristmasCalendarParticipant::where(array('user_id' => session('logged_user')['id'], 'year' => $year))->get()->first();
            $coredbData = (new APIRequestsController())->getUserData(session('logged_user')['id']);
            $finishedTask = DB::table('christmas_calendar_task_participant')
                ->select('christmas_calendar_task_participant.*')
                ->where(array('id' => $id, 'participant_id' => $participant->id, 'took_custom_reward' => 0))
                ->get()->first();

            if (!empty($finishedTask)) {
                $task = ChristmasCalendarTask::where(array('id' => $finishedTask->task_id))->get()->first();
                DB::connection('mysql')->table('christmas_calendar_task_participant')->where(array('id' => $id, 'participant_id' => $participant->id, 'took_custom_reward' => 0))->limit(1)->update(array('took_custom_reward' => true));

                if ($finishedTask->custom_reward_type == 'dv-pass') {
                    // adding one day VIP DV access
                    Log::info('grantVipDVAccess request.');
                    $grantVipDVAccess = (new APIRequestsController())->grantVipDVAccess(array('vip_access' => true, 'vip_access_until' => date('Y-m-d H:i:s', strtotime('+1 day'))));
                    Log::info('grantVipDVAccess response.', ['response' => json_encode($grantVipDVAccess)]);
                }

                $dcnAmount = 0;
                $ticketAmount = 0;
                $bonusTickets = 0;
                $allTasksForThisYear = $this->getAllTasksByYear($year);
                $passedTasks = DB::connection('mysql')->table('christmas_calendar_task_participant')
                    ->select('christmas_calendar_task_participant.*')
                    ->leftJoin('christmas_calendar_participants', 'christmas_calendar_task_participant.participant_id', '=', 'christmas_calendar_participants.id')
                    ->where(array('christmas_calendar_task_participant.participant_id' => $participant->id, 'christmas_calendar_task_participant.disqualified' => 0, 'christmas_calendar_participants.year' => $year))
                    ->whereRaw('christmas_calendar_task_participant.task_id >= ' . $allTasksForThisYear[0]['id'])
                    ->whereRaw('christmas_calendar_task_participant.task_id <= ' . $allTasksForThisYear[sizeof($allTasksForThisYear) - 1]['id'])->get()->toArray();

                if (!empty($passedTasks)) {
                    foreach($passedTasks as $passedTask) {
                        if (!empty($passedTask->custom_reward_type) && !empty($passedTask->took_custom_reward)) {
                            if ($passedTask->custom_reward_type == 'dcn-reward') {
                                $dcnAmount += $passedTask->custom_reward_value;
                            } else if ($passedTask->custom_reward_type == 'ticket-reward') {
                                $ticketAmount += $passedTask->custom_reward_value;
                            }
                        } else {
                            $taskRecord = ChristmasCalendarTask::where(array('id' => $passedTask->task_id, 'year' => $year))->get()->first();
                            if (!empty($taskRecord)) {
                                if ($taskRecord->type == 'dcn-reward') {
                                    $dcnAmount += $taskRecord->value;
                                } else if ($taskRecord->type == 'ticket-reward') {
                                    $ticketAmount += $taskRecord->value;
                                }

                                $datePassedTask = new \DateTime($passedTask->created_at);
                                $dateDiff = strtotime($taskRecord->date) - strtotime($datePassedTask->format('Y-m-d'));
                                $difference = floor($dateDiff / (60*60*24));
                                if ($difference == 0) {
                                    $bonusTickets += 1;
                                }
                            }
                        }
                    }
                }

                $view = view('partials/christmas-calendar-task-'.$year, ['task' => $task, 'year' => $year, 'type' => 'congrats', 'finishedTask' => $finishedTask, 'coredbData' => $coredbData]);
                $view = $view->render();
                return response()->json(array('success' => $view, 'dcnAmount' => $dcnAmount, 'ticketAmount' => $ticketAmount, 'bonusTickets' => $bonusTickets, 'finishedTask' => $finishedTask));
            } else {
                return abort(404);
            }
        } else {
            return abort(404);
        }
    }

    public function checkIfTaskIsAlreadyFinished($task_id, $participant_id, $year) {
        $task = DB::connection('mysql')->table('christmas_calendar_task_participant')
            ->select('christmas_calendar_task_participant.*', 'christmas_calendar_tasks.type')
            ->leftJoin('christmas_calendar_participants', 'christmas_calendar_task_participant.participant_id', '=', 'christmas_calendar_participants.id')
            ->leftJoin('christmas_calendar_tasks', 'christmas_calendar_task_participant.task_id', '=', 'christmas_calendar_tasks.id')
            ->where(array('christmas_calendar_task_participant.task_id' => $task_id, 'christmas_calendar_task_participant.participant_id' => $participant_id, 'christmas_calendar_participants.year' => $year))->get()->first();

        if (!empty($task) && $task->type == 'spinning-wheel' && empty($task->took_custom_reward)) {
            return NULL;
        } else {
            return $task;
        }
    }

    public function checkIfTaskIsDisqualified($task_id, $participant_id, $year) {
        return DB::connection('mysql')->table('christmas_calendar_task_participant')
            ->select('christmas_calendar_task_participant.*')
            ->leftJoin('christmas_calendar_participants', 'christmas_calendar_task_participant.participant_id', '=', 'christmas_calendar_participants.id')
            ->where(array('christmas_calendar_task_participant.task_id' => $task_id, 'christmas_calendar_task_participant.participant_id' => $participant_id, 'disqualified' => true, 'christmas_calendar_participants.year' => $year))->get()->first();
    }

    public function getHolidayCalendarParticipants(Request $request) {
        if (hash('sha256', getenv('HOLIDAY_CALENDAR_KEY').$request->input('day')) == trim($request->input('hash'))) {
            $tasks = ChristmasCalendarTask::where(array('year' => '2021'))->get()->all();
            $firstTask = true;
            foreach ($tasks as $loopedTask) {
                if ($firstTask) {
                    $firstTask = false;
                    $firstTaskId = $loopedTask->id;
                }

                $day = date('j', strtotime($loopedTask->date));
                if ((int)$day == (int)$request->input('day')) {
                    $task = $loopedTask;
                    break;
                }
            }

            /*$participants = DB::table('christmas_calendar_participants')
                ->select('christmas_calendar_participants.*')
                ->leftJoin('christmas_calendar_task_participant', 'christmas_calendar_participants.id', '=', 'christmas_calendar_task_participant.participant_id')
                ->where(array('christmas_calendar_task_participant.task_id' => $firstTaskId, 'christmas_calendar_participants.year' => '2020'))
                ->get()->keyBy('user_id')->toArray();*/

            $participants = DB::table('christmas_calendar_participants')
                ->select('christmas_calendar_participants.*')
                ->where(array('christmas_calendar_participants.year' => '2021'))
                ->get()->keyBy('user_id')->toArray();

            if (!empty($participants) && !empty($task)) {
                $participantsCoredbDataResponse = (new APIRequestsController())->getUsersData(array_keys($participants));
                if ($participantsCoredbDataResponse->success) {
                    foreach ($participantsCoredbDataResponse->data as $participantData) {
                        if (array_key_exists($participantData->id, $participants)) {
                            $participants[$participantData->id]->exists = true;
                            if (!empty($participantData->name)) {
                                $participants[$participantData->id]->name = $participantData->name;
                            }
                            if (!empty($participantData->email)) {
                                $participants[$participantData->id]->email = $participantData->email;
                            }
                        }
                    }
                }

                if ($task->type == 'dcn-reward') {
                    $reward = $task->value . ' DCN';
                } else if ($task->type == 'ticket-reward') {
                    if ((int)$task->value > 1) {
                        $reward = $task->value . ' raffle tickets';
                    } else {
                        $reward = $task->value . ' raffle ticket';
                    }
                } else if ($task->type == 'face-sticker') {
                    $reward = 'Face sticker';
                } else if ($task->type == 'facebook-holiday-frame') {
                    $reward = 'Facebook frame';
                } else if ($task->type == 'custom-holiday-card') {
                    $reward = 'Holiday card';
                } else if ($task->type == 'season-oral-guide') {
                    $reward = 'Season\'s Oral Health Guide';
                } else if ($task->type == 'kids-brushing-calendar') {
                    $reward = 'Kid\'s Brushing Calendar 2021';
                } else if ($task->type == 'kids-oral-care-calendar') {
                    $reward = 'Kid\'s Oral Health Guide: Timeless Super Dentist\'s Tips';
                } else if ($task->type == 'ebook-by-dr-trino-nuno') {
                    $reward = 'The Microbiome In Your Mouth | A Beginners Guide: Discover Why The Futile War Against Germs Is Harmful To Your Health: by Dr. Trino Nuno';
                }

                return response()->json([
                    'success' => true,
                    'data' => array(
                        'participants' => $participants,
                        'dailyReward' => $reward
                    )
                ]);
            } else {
                return response()->json([
                    'error' => true,
                    'test' => 123
                ]);
            }
        } else {
            return response()->json([
                'error' => true
            ]);
        }
    }
}
