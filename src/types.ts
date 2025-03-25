export interface CanvasConfig {
  apiToken: string;
  baseUrl: string;
}

export interface Term {
  id: number;
  name: string;
  start_at?: string;
  end_at?: string;
}

export interface Course {
  id: number;
  name: string;
  course_code: string;
  workflow_state: string;
  term?: Term;
  enrollment_term_id?: number;
  default_view?: string;
  syllabus_body?: string;
  public_description?: string;
  created_at?: string;
  start_at?: string;
  end_at?: string;
}

export interface Module {
  id: number;
  name: string;
  position: number;
  unlock_at?: string;
  require_sequential_progress: boolean;
  published: boolean;
  items_count: number;
  items_url: string;
}

export interface ModuleItem {
  id: number;
  module_id: number;
  position: number;
  title: string;
  type: string;
  content_id: number;
  html_url: string;
  url: string;
  page_url?: string;
  external_url?: string;
  content_details?: {
    points_possible?: number;
    due_at?: string;
    unlock_at?: string;
    lock_at?: string;
  };
  published: boolean;
}

export interface Assignment {
  id: number;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
  due_at?: string;
  lock_at?: string;
  unlock_at?: string;
  has_submitted_submissions: boolean;
  needs_grading_count?: number;
  points_possible: number;
  grading_type: string;
  published: boolean;
  submission_types: string[];
  html_url: string;
  rubric?: Rubric[];
}

export interface Submission {
  id: number;
  assignment_id: number;
  user_id: number;
  submitted_at?: string;
  graded_at?: string;
  grade?: string;
  score?: number;
  workflow_state: string;
  late: boolean;
  missing: boolean;
  submission_type?: string;
  submission_comments?: SubmissionComment[];
  attachments?: Attachment[];
  user?: User;
}

export interface SubmissionComment {
  id: number;
  comment: string;
  author_id: number;
  author?: {
    id: number;
    display_name: string;
    avatar_url: string;
    role: string;
  };
  created_at: string;
}

export interface User {
  id: number;
  name: string;
  sortable_name: string;
  short_name: string;
  sis_user_id?: string;
  email?: string;
  login_id?: string;
  avatar_url?: string;
}

export interface File {
  id: number;
  folder_id: number;
  display_name: string;
  filename: string;
  content_type: string;
  url: string;
  size: number;
  created_at: string;
  updated_at: string;
  unlock_at?: string;
  lock_at?: string;
  hidden: boolean;
  thumbnail_url?: string;
  mime_class: string;
}

export interface Folder {
  id: number;
  name: string;
  parent_folder_id?: number;
  context_id: number;
  context_type: string;
  created_at: string;
  updated_at: string;
  locked: boolean;
  hidden: boolean;
  position: number;
  folders_url: string;
  files_url: string;
  files_count: number;
  folders_count: number;
}

export interface Attachment {
  id: number;
  filename: string;
  display_name: string;
  content-type: string;
  url: string;
  size: number;
  created_at: string;
  updated_at: string;
}

export interface Rubric {
  id: string;
  title: string;
  description?: string;
  points: number;
  criteria?: RubricCriterion[];
}

export interface RubricCriterion {
  id: string;
  description: string;
  long_description?: string;
  points: number;
  ratings?: RubricRating[];
}

export interface RubricRating {
  id: string;
  description: string;
  long_description?: string;
  points: number;
}

export interface Discussion {
  id: number;
  title: string;
  message: string;
  posted_at: string;
  delayed_post_at?: string;
  last_reply_at?: string;
  discussion_type: string;
  discussion_subentry_count: number;
  read_state: string;
  unread_count: number;
  published: boolean;
  locked: boolean;
  pinned: boolean;
  locked_for_user: boolean;
  html_url: string;
  podcast_url?: string;
}

export interface Quiz {
  id: number;
  title: string;
  description: string;
  quiz_type: string;
  assignment_id?: number;
  time_limit?: number;
  shuffle_answers: boolean;
  hide_results?: string;
  show_correct_answers: boolean;
  show_correct_answers_at?: string;
  hide_correct_answers_at?: string;
  allowed_attempts: number;
  scoring_policy?: string;
  one_question_at_a_time: boolean;
  cant_go_back: boolean;
  access_code?: string;
  ip_filter?: string;
  due_at?: string;
  lock_at?: string;
  unlock_at?: string;
  published: boolean;
  question_count: number;
  points_possible: number;
  html_url: string;
}

export interface Page {
  page_id: number;
  url: string;
  title: string;
  created_at: string;
  updated_at: string;
  editing_roles: string;
  published: boolean;
  hide_from_students: boolean;
  front_page: boolean;
  html_url: string;
  body?: string;
}
