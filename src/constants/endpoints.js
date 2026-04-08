export const baseBackendUrl = "http://localhost:5002/";
export const registerApiUrl = baseBackendUrl + "auth/register";
export const loginApiUrl = baseBackendUrl + "auth/login";
export const logoutApiUrl = baseBackendUrl + "auth/logout";
export const checkTokenApi = baseBackendUrl + "auth/check_token";
export const getAStudentUrl = baseBackendUrl + "student/profile/";
export const updateStudentUrl = baseBackendUrl + "student/profile/";
export const getAllGroupsUrl = baseBackendUrl + "groups/";
export const deleteGroupUrl = baseBackendUrl + "groups/delete_group/";
export const getAllStudentGroupsUrl =
  baseBackendUrl + "groups/get_groups_of_student";
export const getAllStudentsUrl = baseBackendUrl + "student/get_all_students";
export const createGroupUrl = baseBackendUrl + "groups/create";
export const requestUrl = baseBackendUrl + "group_request/";
export const deleteRequestUrl =
  baseBackendUrl + "group_request/delete_student_request";
export const getStudentRequestUrl =
  baseBackendUrl + "group_request/student_request";
export const getAllStudentNotInGroupUrl =
  baseBackendUrl + "student/student_not_in_group/";
export const getNotificationsUrl =
  baseBackendUrl + "notification/student_notification";
export const getUnReadNotificationUrl =
  baseBackendUrl + "notification/unread_notification";

export const updateNotifications =
  baseBackendUrl + "notification/modify";

export const createTaskUrl = baseBackendUrl + 'tasks/create'
export const getATaskUrl = baseBackendUrl + 'tasks/'
export const updateATaskUrl = baseBackendUrl + 'tasks/update/'
export const updateTaskMembersUrl = baseBackendUrl + 'tasks/update_members/'
export const deleteTaskUrl = baseBackendUrl + 'tasks/delete/'
export const createScheduleUrl = baseBackendUrl + 'schedule/create'
export const getAllScheduleUrl = baseBackendUrl + 'schedule/get_all_schedule'
export const ScheduleUrl = baseBackendUrl + 'schedule/'
