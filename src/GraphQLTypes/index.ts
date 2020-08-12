import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  UploadFix: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AdminResponse = {
  __typename?: 'AdminResponse';
  result: AdminResult;
};

export type AdminResult = {
  __typename?: 'AdminResult';
  user: Array<Maybe<AdminUser>>;
  yandexMetrika: Array<Maybe<AdminYandexMetrika>>;
  topvisor: Array<Maybe<AdminTopvisor>>;
};

export type AdminTopvisor = {
  __typename?: 'AdminTopvisor';
  _id: Scalars['ID'];
  bitrixGroupId: Scalars['ID'];
  projectId: Scalars['ID'];
};

export type AdminUser = {
  __typename?: 'AdminUser';
  _id: Scalars['ID'];
  userId: Scalars['ID'];
  expires: Scalars['String'];
  isAdmin: Scalars['Boolean'];
};

export type AdminYandexMetrika = {
  __typename?: 'AdminYandexMetrika';
  _id: Scalars['ID'];
  counter: Scalars['ID'];
  bitrixGroupId: Scalars['ID'];
};

export type Attachment = {
  __typename?: 'Attachment';
  ID: Scalars['ID'];
  OBJECT_ID: Scalars['ID'];
  CREATE_TIME: Scalars['String'];
  CREATED_BY: Scalars['ID'];
  DOWNLOAD_URL: Scalars['String'];
  NAME: Scalars['String'];
  SIZE: Scalars['Int'];
};

export type AttachmentResponse = {
  __typename?: 'AttachmentResponse';
  result?: Maybe<Attachment>;
};

export type BitrixUser = {
  __typename?: 'BitrixUser';
  ID: Scalars['ID'];
  ACTIVE: Scalars['Boolean'];
  NAME: Scalars['String'];
  LAST_NAME: Scalars['String'];
  WORK_POSITION?: Maybe<Scalars['String']>;
  DEPARTAMENT?: Maybe<Scalars['String']>;
  SECOND_NAME?: Maybe<Scalars['String']>;
  PERSONAL_GENDER?: Maybe<Gender>;
  PERSONAL_PROFESSION?: Maybe<Scalars['String']>;
  PERSONAL_WWW?: Maybe<Scalars['String']>;
  PERSONAL_BIRTHDAY?: Maybe<Scalars['String']>;
  PERSONAL_PHOTO?: Maybe<Scalars['String']>;
  PERSONAL_ICQ?: Maybe<Scalars['String']>;
  PERSONAL_PHONE?: Maybe<Scalars['String']>;
  PERSONAL_MOBILE?: Maybe<Scalars['String']>;
};

export enum BooleanEnum {
  Y = 'Y',
  N = 'N'
}

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export enum CodeStatus {
  CsErrInfected = 'CS_ERR_INFECTED',
  CsErrOtherHtmlCode = 'CS_ERR_OTHER_HTML_CODE',
  CsNotFound = 'CS_NOT_FOUND',
  CsErrConnect = 'CS_ERR_CONNECT',
  CsErrTimeout = 'CS_ERR_TIMEOUT',
  CsOk = 'CS_OK'
}

export type Counter = {
  __typename?: 'Counter';
  id?: Maybe<Scalars['ID']>;
  status?: Maybe<Status>;
  owner_login?: Maybe<Scalars['String']>;
  code_status?: Maybe<CodeStatus>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<CounterType>;
  favorite?: Maybe<Scalars['Int']>;
  permission?: Maybe<Permission>;
  create_time?: Maybe<Scalars['String']>;
  time_zone_name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  monitoring?: Maybe<Monitoring>;
  filter_robots?: Maybe<Scalars['Int']>;
  site?: Maybe<Scalars['String']>;
  mirrors?: Maybe<Array<Maybe<Scalars['String']>>>;
  errors?: Maybe<ErrorType>;
  goals?: Maybe<Array<Maybe<Goal>>>;
};

export enum CounterType {
  Partner = 'partner',
  Simple = 'simple'
}

export type DataType = {
  __typename?: 'DataType';
  dimensions: Array<Maybe<Dimension>>;
  metrics: Array<Maybe<Array<Maybe<Scalars['Int']>>>>;
};

export type DeleteTaskMessageResponse = {
  __typename?: 'DeleteTaskMessageResponse';
  error?: Maybe<Scalars['String']>;
  error_message?: Maybe<Scalars['String']>;
  result?: Maybe<Scalars['Boolean']>;
};

export type Dimension = {
  __typename?: 'Dimension';
  name?: Maybe<Scalars['String']>;
  icon_id?: Maybe<Scalars['ID']>;
  icon_type?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
};

export enum Duration {
  Days = 'days',
  Hours = 'hours',
  Minutes = 'minutes'
}

export type Errors = {
  __typename?: 'Errors';
  error_type: Scalars['String'];
  message: Scalars['String'];
};

export type ErrorType = {
  __typename?: 'ErrorType';
  errors: Array<Maybe<Errors>>;
};

export type Feed = {
  __typename?: 'Feed';
  ID: Scalars['ID'];
  AUTHOR?: Maybe<BitrixUser>;
  AUTHOR_ID: Scalars['String'];
  DETAIL_TEXT: Scalars['String'];
  DATE_PUBLISH: Scalars['String'];
  FILES?: Maybe<Array<Maybe<Attachment>>>;
};

export type FeedMessageResponse = {
  __typename?: 'FeedMessageResponse';
  result: Scalars['Boolean'];
};

export type FeedResponse = {
  __typename?: 'FeedResponse';
  next?: Maybe<Scalars['Int']>;
  total: Scalars['Int'];
  result: Array<Maybe<Feed>>;
};

export enum Gender {
  M = 'M',
  F = 'F'
}

export type Goal = {
  __typename?: 'Goal';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Keyword = {
  __typename?: 'Keyword';
  name: Scalars['String'];
  positionsData?: Maybe<Array<Maybe<PositionData>>>;
};

export type Monitoring = {
  __typename?: 'Monitoring';
  enable_monitoring: Scalars['Int'];
  emails: Array<Maybe<Scalars['String']>>;
  sms_allowed: Scalars['Int'];
  enable_sms?: Maybe<Scalars['Int']>;
  sms_time: Scalars['String'];
  phones: Array<Maybe<Scalars['String']>>;
  phone_ids: Array<Maybe<Scalars['ID']>>;
  possible_phones: Array<Maybe<Scalars['String']>>;
  possible_phone_ids: Array<Maybe<Scalars['ID']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  SendTaskMessage: SendTaskMessageResponse;
  SendFeedMessage: FeedMessageResponse;
  DeleteTaskMessage: DeleteTaskMessageResponse;
  DeleteUser?: Maybe<Scalars['String']>;
  RefreshMetrikaCounter?: Maybe<Counter>;
};


export type MutationSendTaskMessageArgs = {
  taskId: Scalars['ID'];
  message: Scalars['String'];
};


export type MutationSendFeedMessageArgs = {
  title?: Maybe<Scalars['String']>;
  message: Scalars['String'];
  files?: Maybe<Array<Maybe<Scalars['UploadFix']>>>;
  showFor?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type MutationDeleteTaskMessageArgs = {
  taskId: Scalars['ID'];
  messageId: Scalars['ID'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};


export type MutationRefreshMetrikaCounterArgs = {
  bitrixGroupId: Scalars['ID'];
};

export enum Permission {
  View = 'view',
  Edit = 'edit',
  Own = 'own'
}

export type PositionData = {
  __typename?: 'PositionData';
  data?: Maybe<Scalars['String']>;
  regionIndex?: Maybe<Scalars['Int']>;
  position?: Maybe<Scalars['String']>;
};

export type PositionResponse = {
  __typename?: 'PositionResponse';
  result?: Maybe<Result>;
};

export type Profile = {
  __typename?: 'Profile';
  ID?: Maybe<Scalars['ID']>;
  ADMIN?: Maybe<Scalars['Boolean']>;
  LAST_NAME?: Maybe<Scalars['String']>;
  NAME?: Maybe<Scalars['String']>;
  PERSONAL_GENDER?: Maybe<Gender>;
  PERSONAL_PHOTO?: Maybe<Scalars['String']>;
};

export type Project = {
  __typename?: 'Project';
  id: Scalars['ID'];
  name: Scalars['String'];
  site: Scalars['String'];
  searchers: Array<Searcher>;
};

export type Query = {
  __typename?: 'Query';
  GetProfile: Profile;
  GetUserGroups?: Maybe<WorkGroupResponse>;
  GetGroupById?: Maybe<WorkGroup>;
  SearchGroupByName: Array<Maybe<WorkGroup>>;
  GetGroupsUsers: Array<Maybe<BitrixUser>>;
  GetGroupsTasks: Array<Maybe<Task>>;
  GetTaskByID?: Maybe<TaskDetail>;
  GetUserByID?: Maybe<BitrixUser>;
  GetTaskComments: Array<Maybe<TaskComment>>;
  GetFeed: FeedResponse;
  GetAttachment: AttachmentResponse;
  GetYandexMetrics: YandexMetrikaApiResponse;
  GetCounter: Counter;
  GetTopvisorProject?: Maybe<Project>;
  GetTopvisorPositions: PositionResponse;
  GetTopvisorSummaryChart?: Maybe<SummaryChartResponse>;
  GetAdminData: AdminResponse;
};


export type QueryGetUserGroupsArgs = {
  start?: Maybe<Scalars['Int']>;
};


export type QueryGetGroupByIdArgs = {
  groupId: Scalars['ID'];
};


export type QuerySearchGroupByNameArgs = {
  name: Scalars['String'];
};


export type QueryGetGroupsUsersArgs = {
  groupId: Scalars['ID'];
};


export type QueryGetGroupsTasksArgs = {
  groupId: Scalars['ID'];
};


export type QueryGetTaskByIdArgs = {
  taskId: Scalars['ID'];
};


export type QueryGetUserByIdArgs = {
  userId: Scalars['ID'];
};


export type QueryGetTaskCommentsArgs = {
  taskId: Scalars['ID'];
};


export type QueryGetFeedArgs = {
  start?: Maybe<Scalars['Int']>;
  filter?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryGetAttachmentArgs = {
  id: Scalars['ID'];
};


export type QueryGetYandexMetricsArgs = {
  metrics?: Maybe<Scalars['String']>;
  dimensions?: Maybe<Scalars['String']>;
  date1?: Maybe<Scalars['String']>;
  date2?: Maybe<Scalars['String']>;
  bitrixGroupId: Scalars['ID'];
  preset?: Maybe<Scalars['String']>;
};


export type QueryGetCounterArgs = {
  bitrixGroupId: Scalars['ID'];
};


export type QueryGetTopvisorProjectArgs = {
  bitrixGroupId: Scalars['ID'];
};


export type QueryGetTopvisorPositionsArgs = {
  bitrixGroupId: Scalars['ID'];
  projectId: Scalars['ID'];
  regionIndexes: Array<Scalars['ID']>;
  date1: Scalars['String'];
  date2: Scalars['String'];
};


export type QueryGetTopvisorSummaryChartArgs = {
  bitrixGroupId: Scalars['ID'];
  projectId: Scalars['ID'];
  regionIndex: Scalars['ID'];
  date1: Scalars['String'];
  date2: Scalars['String'];
};

export type QueryType = {
  __typename?: 'QueryType';
  ids: Array<Maybe<Scalars['Int']>>;
  dimensions: Array<Maybe<Scalars['String']>>;
  metrics: Array<Maybe<Scalars['String']>>;
  sort: Array<Maybe<Scalars['String']>>;
  date1: Scalars['String'];
  date2: Scalars['String'];
  limit?: Maybe<Scalars['Int']>;
  offcet?: Maybe<Scalars['Int']>;
  group?: Maybe<Scalars['String']>;
  auto_group_size?: Maybe<Scalars['String']>;
  quantile?: Maybe<Scalars['String']>;
  offline_window?: Maybe<Scalars['String']>;
  attribution?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  adfox_event_id?: Maybe<Scalars['String']>;
};

export type Region = {
  __typename?: 'Region';
  searcher_key: Scalars['Int'];
  id: Scalars['ID'];
  key: Scalars['Int'];
  lang: Scalars['String'];
  devise: Scalars['Int'];
  depth: Scalars['Int'];
  index: Scalars['Int'];
  enabled: Scalars['Int'];
  type: Scalars['String'];
  countryCode: Scalars['String'];
  name: Scalars['String'];
  areaName: Scalars['String'];
  domain: Scalars['String'];
};

export type Result = {
  __typename?: 'Result';
  keywords: Array<Maybe<Keyword>>;
};

export enum RoleGroup {
  A = 'A',
  E = 'E',
  K = 'K'
}

export type Searcher = {
  __typename?: 'Searcher';
  id: Scalars['ID'];
  project_id: Scalars['ID'];
  searcher: Scalars['Int'];
  enabled: Scalars['Int'];
  ord: Scalars['Int'];
  key: Scalars['Int'];
  name: Scalars['String'];
  regions: Array<Region>;
};

export type SendTaskMessageResponse = {
  __typename?: 'SendTaskMessageResponse';
  error?: Maybe<Scalars['String']>;
  error_message?: Maybe<Scalars['String']>;
  result?: Maybe<Scalars['ID']>;
};

export type ShortTaskUser = {
  __typename?: 'shortTaskUser';
  id: Scalars['ID'];
  name: Scalars['String'];
  link: Scalars['String'];
  icon: Scalars['String'];
};

export enum Status {
  Active = 'Active',
  Deleted = 'Deleted'
}

export type SummaryChart = {
  __typename?: 'SummaryChart';
  tops?: Maybe<Tops>;
  avg?: Maybe<Array<Maybe<Scalars['Float']>>>;
  dates?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SummaryChartResponse = {
  __typename?: 'SummaryChartResponse';
  result?: Maybe<SummaryChart>;
};

export type Task = {
  __typename?: 'Task';
  ID: Scalars['ID'];
  TITLE: Scalars['String'];
  STAGE_ID: Scalars['Int'];
  DESCRIPTION?: Maybe<Scalars['String']>;
  DEADLINE: Scalars['String'];
  STATUS?: Maybe<Scalars['Int']>;
  DURATION_FACT?: Maybe<Scalars['Int']>;
  CREATED_BY_NAME: Scalars['String'];
  CREATED_BY_LAST_NAME: Scalars['String'];
  CREATED_DATE: Scalars['String'];
  CLOSED_DATE: Scalars['String'];
  TIME_SPENT_IN_LOGS?: Maybe<Scalars['Int']>;
};

export type TaskComment = {
  __typename?: 'TaskComment';
  ID?: Maybe<Scalars['ID']>;
  AUTHOR?: Maybe<BitrixUser>;
  AUTHOR_ID: Scalars['ID'];
  POST_DATE?: Maybe<Scalars['String']>;
  POST_MESSAGE?: Maybe<Scalars['String']>;
  ATTACHED_OBJECTS?: Maybe<Array<Maybe<Scalars['ID']>>>;
  FILES?: Maybe<Array<Maybe<Attachment>>>;
};

export type TaskDetail = {
  __typename?: 'TaskDetail';
  id: Scalars['ID'];
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  deadline?: Maybe<Scalars['String']>;
  startDatePlan?: Maybe<Scalars['String']>;
  endDatePlan?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['Int']>;
  responsible?: Maybe<ShortTaskUser>;
  timeEstimate?: Maybe<Scalars['String']>;
  timeSpentInLogs?: Maybe<Scalars['Int']>;
  creator?: Maybe<ShortTaskUser>;
  status?: Maybe<Scalars['Int']>;
  dateStart?: Maybe<Scalars['String']>;
  durationFact?: Maybe<Scalars['Int']>;
  durationPlan?: Maybe<Scalars['Int']>;
  durationType?: Maybe<Duration>;
  createdDate?: Maybe<Scalars['String']>;
  closedDate?: Maybe<Scalars['String']>;
  ufTaskWebdavFiles?: Maybe<Array<Maybe<Scalars['ID']>>>;
  files?: Maybe<Array<Maybe<Attachment>>>;
};

export type Tops = {
  __typename?: 'Tops';
  all?: Maybe<Array<Maybe<Scalars['Int']>>>;
  top3?: Maybe<Array<Maybe<Scalars['Int']>>>;
  top10?: Maybe<Array<Maybe<Scalars['Int']>>>;
  top11_30?: Maybe<Array<Maybe<Scalars['Int']>>>;
  top31_50?: Maybe<Array<Maybe<Scalars['Int']>>>;
  top51_100?: Maybe<Array<Maybe<Scalars['Int']>>>;
  top101_10000?: Maybe<Array<Maybe<Scalars['Int']>>>;
};



export type WorkGroup = {
  __typename?: 'WorkGroup';
  ID?: Maybe<Scalars['ID']>;
  SITE_ID?: Maybe<Scalars['String']>;
  NAME?: Maybe<Scalars['String']>;
  DESCRIPTION?: Maybe<Scalars['String']>;
  DATE_CREATE?: Maybe<Scalars['String']>;
  DATE_UPDATE?: Maybe<Scalars['String']>;
  ACTIVE?: Maybe<BooleanEnum>;
  VISIBLE?: Maybe<BooleanEnum>;
  OPENED?: Maybe<BooleanEnum>;
  CLOSED?: Maybe<BooleanEnum>;
  SUBJECT_ID?: Maybe<Scalars['Int']>;
  OWNER_ID?: Maybe<Scalars['Int']>;
  KEYWORDS?: Maybe<Scalars['String']>;
  NUMBER_OF_MEMBERS?: Maybe<Scalars['Int']>;
  DATE_ACTIVITY?: Maybe<Scalars['String']>;
  SUBJECT_NAME?: Maybe<Scalars['String']>;
  PROJECT?: Maybe<BooleanEnum>;
  IS_EXTRANET?: Maybe<BooleanEnum>;
};

export type WorkGroupResponse = {
  __typename?: 'WorkGroupResponse';
  result?: Maybe<Array<Maybe<WorkGroup>>>;
  next?: Maybe<Scalars['Int']>;
  total: Scalars['Int'];
};

export type WorkGroupShort = {
  __typename?: 'WorkGroupShort';
  GROUP_ID?: Maybe<Scalars['ID']>;
  GROUP_NAME?: Maybe<Scalars['String']>;
  ROLE?: Maybe<RoleGroup>;
};

export type YandexMetrikaApiResponse = {
  __typename?: 'YandexMetrikaApiResponse';
  query: QueryType;
  data: Array<Maybe<DataType>>;
  errors?: Maybe<ErrorType>;
  time_intervals?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  totals?: Maybe<Array<Maybe<Array<Maybe<Scalars['Int']>>>>>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>;
  Profile: ResolverTypeWrapper<Profile>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Gender: Gender;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  WorkGroupResponse: ResolverTypeWrapper<WorkGroupResponse>;
  WorkGroup: ResolverTypeWrapper<WorkGroup>;
  BooleanEnum: BooleanEnum;
  BitrixUser: ResolverTypeWrapper<BitrixUser>;
  Task: ResolverTypeWrapper<Task>;
  TaskDetail: ResolverTypeWrapper<TaskDetail>;
  shortTaskUser: ResolverTypeWrapper<ShortTaskUser>;
  Duration: Duration;
  Attachment: ResolverTypeWrapper<Attachment>;
  TaskComment: ResolverTypeWrapper<TaskComment>;
  FeedResponse: ResolverTypeWrapper<FeedResponse>;
  Feed: ResolverTypeWrapper<Feed>;
  AttachmentResponse: ResolverTypeWrapper<AttachmentResponse>;
  YandexMetrikaApiResponse: ResolverTypeWrapper<YandexMetrikaApiResponse>;
  QueryType: ResolverTypeWrapper<QueryType>;
  DataType: ResolverTypeWrapper<DataType>;
  Dimension: ResolverTypeWrapper<Dimension>;
  ErrorType: ResolverTypeWrapper<ErrorType>;
  Errors: ResolverTypeWrapper<Errors>;
  Counter: ResolverTypeWrapper<Counter>;
  Status: Status;
  CodeStatus: CodeStatus;
  CounterType: CounterType;
  Permission: Permission;
  Monitoring: ResolverTypeWrapper<Monitoring>;
  Goal: ResolverTypeWrapper<Goal>;
  Project: ResolverTypeWrapper<Project>;
  Searcher: ResolverTypeWrapper<Searcher>;
  Region: ResolverTypeWrapper<Region>;
  PositionResponse: ResolverTypeWrapper<PositionResponse>;
  Result: ResolverTypeWrapper<Result>;
  Keyword: ResolverTypeWrapper<Keyword>;
  PositionData: ResolverTypeWrapper<PositionData>;
  SummaryChartResponse: ResolverTypeWrapper<SummaryChartResponse>;
  SummaryChart: ResolverTypeWrapper<SummaryChart>;
  Tops: ResolverTypeWrapper<Tops>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  AdminResponse: ResolverTypeWrapper<AdminResponse>;
  AdminResult: ResolverTypeWrapper<AdminResult>;
  AdminUser: ResolverTypeWrapper<AdminUser>;
  AdminYandexMetrika: ResolverTypeWrapper<AdminYandexMetrika>;
  AdminTopvisor: ResolverTypeWrapper<AdminTopvisor>;
  Mutation: ResolverTypeWrapper<{}>;
  SendTaskMessageResponse: ResolverTypeWrapper<SendTaskMessageResponse>;
  UploadFix: ResolverTypeWrapper<Scalars['UploadFix']>;
  FeedMessageResponse: ResolverTypeWrapper<FeedMessageResponse>;
  DeleteTaskMessageResponse: ResolverTypeWrapper<DeleteTaskMessageResponse>;
  RoleGroup: RoleGroup;
  WorkGroupShort: ResolverTypeWrapper<WorkGroupShort>;
  CacheControlScope: CacheControlScope;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {};
  Profile: Profile;
  ID: Scalars['ID'];
  Boolean: Scalars['Boolean'];
  String: Scalars['String'];
  Int: Scalars['Int'];
  WorkGroupResponse: WorkGroupResponse;
  WorkGroup: WorkGroup;
  BitrixUser: BitrixUser;
  Task: Task;
  TaskDetail: TaskDetail;
  shortTaskUser: ShortTaskUser;
  Attachment: Attachment;
  TaskComment: TaskComment;
  FeedResponse: FeedResponse;
  Feed: Feed;
  AttachmentResponse: AttachmentResponse;
  YandexMetrikaApiResponse: YandexMetrikaApiResponse;
  QueryType: QueryType;
  DataType: DataType;
  Dimension: Dimension;
  ErrorType: ErrorType;
  Errors: Errors;
  Counter: Counter;
  Monitoring: Monitoring;
  Goal: Goal;
  Project: Project;
  Searcher: Searcher;
  Region: Region;
  PositionResponse: PositionResponse;
  Result: Result;
  Keyword: Keyword;
  PositionData: PositionData;
  SummaryChartResponse: SummaryChartResponse;
  SummaryChart: SummaryChart;
  Tops: Tops;
  Float: Scalars['Float'];
  AdminResponse: AdminResponse;
  AdminResult: AdminResult;
  AdminUser: AdminUser;
  AdminYandexMetrika: AdminYandexMetrika;
  AdminTopvisor: AdminTopvisor;
  Mutation: {};
  SendTaskMessageResponse: SendTaskMessageResponse;
  UploadFix: Scalars['UploadFix'];
  FeedMessageResponse: FeedMessageResponse;
  DeleteTaskMessageResponse: DeleteTaskMessageResponse;
  WorkGroupShort: WorkGroupShort;
  Upload: Scalars['Upload'];
};

export type AdminResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['AdminResponse'] = ResolversParentTypes['AdminResponse']> = {
  result?: Resolver<ResolversTypes['AdminResult'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type AdminResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['AdminResult'] = ResolversParentTypes['AdminResult']> = {
  user?: Resolver<Array<Maybe<ResolversTypes['AdminUser']>>, ParentType, ContextType>;
  yandexMetrika?: Resolver<Array<Maybe<ResolversTypes['AdminYandexMetrika']>>, ParentType, ContextType>;
  topvisor?: Resolver<Array<Maybe<ResolversTypes['AdminTopvisor']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type AdminTopvisorResolvers<ContextType = any, ParentType extends ResolversParentTypes['AdminTopvisor'] = ResolversParentTypes['AdminTopvisor']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  bitrixGroupId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type AdminUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['AdminUser'] = ResolversParentTypes['AdminUser']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  expires?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isAdmin?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type AdminYandexMetrikaResolvers<ContextType = any, ParentType extends ResolversParentTypes['AdminYandexMetrika'] = ResolversParentTypes['AdminYandexMetrika']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  counter?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  bitrixGroupId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type AttachmentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Attachment'] = ResolversParentTypes['Attachment']> = {
  ID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  OBJECT_ID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  CREATE_TIME?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  CREATED_BY?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  DOWNLOAD_URL?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  NAME?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  SIZE?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type AttachmentResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['AttachmentResponse'] = ResolversParentTypes['AttachmentResponse']> = {
  result?: Resolver<Maybe<ResolversTypes['Attachment']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type BitrixUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['BitrixUser'] = ResolversParentTypes['BitrixUser']> = {
  ID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  ACTIVE?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  NAME?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  LAST_NAME?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  WORK_POSITION?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  DEPARTAMENT?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  SECOND_NAME?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  PERSONAL_GENDER?: Resolver<Maybe<ResolversTypes['Gender']>, ParentType, ContextType>;
  PERSONAL_PROFESSION?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  PERSONAL_WWW?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  PERSONAL_BIRTHDAY?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  PERSONAL_PHOTO?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  PERSONAL_ICQ?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  PERSONAL_PHONE?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  PERSONAL_MOBILE?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type CounterResolvers<ContextType = any, ParentType extends ResolversParentTypes['Counter'] = ResolversParentTypes['Counter']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Status']>, ParentType, ContextType>;
  owner_login?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  code_status?: Resolver<Maybe<ResolversTypes['CodeStatus']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['CounterType']>, ParentType, ContextType>;
  favorite?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  permission?: Resolver<Maybe<ResolversTypes['Permission']>, ParentType, ContextType>;
  create_time?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  time_zone_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  monitoring?: Resolver<Maybe<ResolversTypes['Monitoring']>, ParentType, ContextType>;
  filter_robots?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  site?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mirrors?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  errors?: Resolver<Maybe<ResolversTypes['ErrorType']>, ParentType, ContextType>;
  goals?: Resolver<Maybe<Array<Maybe<ResolversTypes['Goal']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type DataTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['DataType'] = ResolversParentTypes['DataType']> = {
  dimensions?: Resolver<Array<Maybe<ResolversTypes['Dimension']>>, ParentType, ContextType>;
  metrics?: Resolver<Array<Maybe<Array<Maybe<ResolversTypes['Int']>>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type DeleteTaskMessageResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteTaskMessageResponse'] = ResolversParentTypes['DeleteTaskMessageResponse']> = {
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  error_message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  result?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type DimensionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Dimension'] = ResolversParentTypes['Dimension']> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  icon_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  icon_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ErrorsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Errors'] = ResolversParentTypes['Errors']> = {
  error_type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ErrorTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ErrorType'] = ResolversParentTypes['ErrorType']> = {
  errors?: Resolver<Array<Maybe<ResolversTypes['Errors']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type FeedResolvers<ContextType = any, ParentType extends ResolversParentTypes['Feed'] = ResolversParentTypes['Feed']> = {
  ID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  AUTHOR?: Resolver<Maybe<ResolversTypes['BitrixUser']>, ParentType, ContextType>;
  AUTHOR_ID?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  DETAIL_TEXT?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  DATE_PUBLISH?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  FILES?: Resolver<Maybe<Array<Maybe<ResolversTypes['Attachment']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type FeedMessageResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['FeedMessageResponse'] = ResolversParentTypes['FeedMessageResponse']> = {
  result?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type FeedResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['FeedResponse'] = ResolversParentTypes['FeedResponse']> = {
  next?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  result?: Resolver<Array<Maybe<ResolversTypes['Feed']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type GoalResolvers<ContextType = any, ParentType extends ResolversParentTypes['Goal'] = ResolversParentTypes['Goal']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type KeywordResolvers<ContextType = any, ParentType extends ResolversParentTypes['Keyword'] = ResolversParentTypes['Keyword']> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  positionsData?: Resolver<Maybe<Array<Maybe<ResolversTypes['PositionData']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MonitoringResolvers<ContextType = any, ParentType extends ResolversParentTypes['Monitoring'] = ResolversParentTypes['Monitoring']> = {
  enable_monitoring?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  emails?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  sms_allowed?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  enable_sms?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sms_time?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phones?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  phone_ids?: Resolver<Array<Maybe<ResolversTypes['ID']>>, ParentType, ContextType>;
  possible_phones?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  possible_phone_ids?: Resolver<Array<Maybe<ResolversTypes['ID']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  SendTaskMessage?: Resolver<ResolversTypes['SendTaskMessageResponse'], ParentType, ContextType, RequireFields<MutationSendTaskMessageArgs, 'taskId' | 'message'>>;
  SendFeedMessage?: Resolver<ResolversTypes['FeedMessageResponse'], ParentType, ContextType, RequireFields<MutationSendFeedMessageArgs, 'message'>>;
  DeleteTaskMessage?: Resolver<ResolversTypes['DeleteTaskMessageResponse'], ParentType, ContextType, RequireFields<MutationDeleteTaskMessageArgs, 'taskId' | 'messageId'>>;
  DeleteUser?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationDeleteUserArgs, 'id'>>;
  RefreshMetrikaCounter?: Resolver<Maybe<ResolversTypes['Counter']>, ParentType, ContextType, RequireFields<MutationRefreshMetrikaCounterArgs, 'bitrixGroupId'>>;
};

export type PositionDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['PositionData'] = ResolversParentTypes['PositionData']> = {
  data?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  regionIndex?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type PositionResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['PositionResponse'] = ResolversParentTypes['PositionResponse']> = {
  result?: Resolver<Maybe<ResolversTypes['Result']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ProfileResolvers<ContextType = any, ParentType extends ResolversParentTypes['Profile'] = ResolversParentTypes['Profile']> = {
  ID?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  ADMIN?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  LAST_NAME?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  NAME?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  PERSONAL_GENDER?: Resolver<Maybe<ResolversTypes['Gender']>, ParentType, ContextType>;
  PERSONAL_PHOTO?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ProjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['Project'] = ResolversParentTypes['Project']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  site?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  searchers?: Resolver<Array<ResolversTypes['Searcher']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  GetProfile?: Resolver<ResolversTypes['Profile'], ParentType, ContextType>;
  GetUserGroups?: Resolver<Maybe<ResolversTypes['WorkGroupResponse']>, ParentType, ContextType, RequireFields<QueryGetUserGroupsArgs, 'start'>>;
  GetGroupById?: Resolver<Maybe<ResolversTypes['WorkGroup']>, ParentType, ContextType, RequireFields<QueryGetGroupByIdArgs, 'groupId'>>;
  SearchGroupByName?: Resolver<Array<Maybe<ResolversTypes['WorkGroup']>>, ParentType, ContextType, RequireFields<QuerySearchGroupByNameArgs, 'name'>>;
  GetGroupsUsers?: Resolver<Array<Maybe<ResolversTypes['BitrixUser']>>, ParentType, ContextType, RequireFields<QueryGetGroupsUsersArgs, 'groupId'>>;
  GetGroupsTasks?: Resolver<Array<Maybe<ResolversTypes['Task']>>, ParentType, ContextType, RequireFields<QueryGetGroupsTasksArgs, 'groupId'>>;
  GetTaskByID?: Resolver<Maybe<ResolversTypes['TaskDetail']>, ParentType, ContextType, RequireFields<QueryGetTaskByIdArgs, 'taskId'>>;
  GetUserByID?: Resolver<Maybe<ResolversTypes['BitrixUser']>, ParentType, ContextType, RequireFields<QueryGetUserByIdArgs, 'userId'>>;
  GetTaskComments?: Resolver<Array<Maybe<ResolversTypes['TaskComment']>>, ParentType, ContextType, RequireFields<QueryGetTaskCommentsArgs, 'taskId'>>;
  GetFeed?: Resolver<ResolversTypes['FeedResponse'], ParentType, ContextType, RequireFields<QueryGetFeedArgs, 'start'>>;
  GetAttachment?: Resolver<ResolversTypes['AttachmentResponse'], ParentType, ContextType, RequireFields<QueryGetAttachmentArgs, 'id'>>;
  GetYandexMetrics?: Resolver<ResolversTypes['YandexMetrikaApiResponse'], ParentType, ContextType, RequireFields<QueryGetYandexMetricsArgs, 'bitrixGroupId'>>;
  GetCounter?: Resolver<ResolversTypes['Counter'], ParentType, ContextType, RequireFields<QueryGetCounterArgs, 'bitrixGroupId'>>;
  GetTopvisorProject?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType, RequireFields<QueryGetTopvisorProjectArgs, 'bitrixGroupId'>>;
  GetTopvisorPositions?: Resolver<ResolversTypes['PositionResponse'], ParentType, ContextType, RequireFields<QueryGetTopvisorPositionsArgs, 'bitrixGroupId' | 'projectId' | 'regionIndexes' | 'date1' | 'date2'>>;
  GetTopvisorSummaryChart?: Resolver<Maybe<ResolversTypes['SummaryChartResponse']>, ParentType, ContextType, RequireFields<QueryGetTopvisorSummaryChartArgs, 'bitrixGroupId' | 'projectId' | 'regionIndex' | 'date1' | 'date2'>>;
  GetAdminData?: Resolver<ResolversTypes['AdminResponse'], ParentType, ContextType>;
};

export type QueryTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['QueryType'] = ResolversParentTypes['QueryType']> = {
  ids?: Resolver<Array<Maybe<ResolversTypes['Int']>>, ParentType, ContextType>;
  dimensions?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  metrics?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  sort?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  date1?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  date2?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  limit?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  offcet?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  group?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  auto_group_size?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  quantile?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  offline_window?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attribution?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  currency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  adfox_event_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type RegionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Region'] = ResolversParentTypes['Region']> = {
  searcher_key?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  key?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  lang?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  devise?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  depth?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  index?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  enabled?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  countryCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  areaName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  domain?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['Result'] = ResolversParentTypes['Result']> = {
  keywords?: Resolver<Array<Maybe<ResolversTypes['Keyword']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type SearcherResolvers<ContextType = any, ParentType extends ResolversParentTypes['Searcher'] = ResolversParentTypes['Searcher']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  project_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  searcher?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  enabled?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  ord?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  key?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  regions?: Resolver<Array<ResolversTypes['Region']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type SendTaskMessageResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['SendTaskMessageResponse'] = ResolversParentTypes['SendTaskMessageResponse']> = {
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  error_message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  result?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ShortTaskUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['shortTaskUser'] = ResolversParentTypes['shortTaskUser']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  link?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  icon?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type SummaryChartResolvers<ContextType = any, ParentType extends ResolversParentTypes['SummaryChart'] = ResolversParentTypes['SummaryChart']> = {
  tops?: Resolver<Maybe<ResolversTypes['Tops']>, ParentType, ContextType>;
  avg?: Resolver<Maybe<Array<Maybe<ResolversTypes['Float']>>>, ParentType, ContextType>;
  dates?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type SummaryChartResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['SummaryChartResponse'] = ResolversParentTypes['SummaryChartResponse']> = {
  result?: Resolver<Maybe<ResolversTypes['SummaryChart']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type TaskResolvers<ContextType = any, ParentType extends ResolversParentTypes['Task'] = ResolversParentTypes['Task']> = {
  ID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  TITLE?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  STAGE_ID?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  DESCRIPTION?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  DEADLINE?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  STATUS?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  DURATION_FACT?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  CREATED_BY_NAME?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  CREATED_BY_LAST_NAME?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  CREATED_DATE?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  CLOSED_DATE?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  TIME_SPENT_IN_LOGS?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type TaskCommentResolvers<ContextType = any, ParentType extends ResolversParentTypes['TaskComment'] = ResolversParentTypes['TaskComment']> = {
  ID?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  AUTHOR?: Resolver<Maybe<ResolversTypes['BitrixUser']>, ParentType, ContextType>;
  AUTHOR_ID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  POST_DATE?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  POST_MESSAGE?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ATTACHED_OBJECTS?: Resolver<Maybe<Array<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType>;
  FILES?: Resolver<Maybe<Array<Maybe<ResolversTypes['Attachment']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type TaskDetailResolvers<ContextType = any, ParentType extends ResolversParentTypes['TaskDetail'] = ResolversParentTypes['TaskDetail']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deadline?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startDatePlan?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  endDatePlan?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  priority?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  responsible?: Resolver<Maybe<ResolversTypes['shortTaskUser']>, ParentType, ContextType>;
  timeEstimate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timeSpentInLogs?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  creator?: Resolver<Maybe<ResolversTypes['shortTaskUser']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  dateStart?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  durationFact?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  durationPlan?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  durationType?: Resolver<Maybe<ResolversTypes['Duration']>, ParentType, ContextType>;
  createdDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  closedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ufTaskWebdavFiles?: Resolver<Maybe<Array<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType>;
  files?: Resolver<Maybe<Array<Maybe<ResolversTypes['Attachment']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type TopsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Tops'] = ResolversParentTypes['Tops']> = {
  all?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  top3?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  top10?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  top11_30?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  top31_50?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  top51_100?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  top101_10000?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export interface UploadFixScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['UploadFix'], any> {
  name: 'UploadFix';
}

export type WorkGroupResolvers<ContextType = any, ParentType extends ResolversParentTypes['WorkGroup'] = ResolversParentTypes['WorkGroup']> = {
  ID?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  SITE_ID?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  NAME?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  DESCRIPTION?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  DATE_CREATE?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  DATE_UPDATE?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ACTIVE?: Resolver<Maybe<ResolversTypes['BooleanEnum']>, ParentType, ContextType>;
  VISIBLE?: Resolver<Maybe<ResolversTypes['BooleanEnum']>, ParentType, ContextType>;
  OPENED?: Resolver<Maybe<ResolversTypes['BooleanEnum']>, ParentType, ContextType>;
  CLOSED?: Resolver<Maybe<ResolversTypes['BooleanEnum']>, ParentType, ContextType>;
  SUBJECT_ID?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  OWNER_ID?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  KEYWORDS?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  NUMBER_OF_MEMBERS?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  DATE_ACTIVITY?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  SUBJECT_NAME?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  PROJECT?: Resolver<Maybe<ResolversTypes['BooleanEnum']>, ParentType, ContextType>;
  IS_EXTRANET?: Resolver<Maybe<ResolversTypes['BooleanEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type WorkGroupResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['WorkGroupResponse'] = ResolversParentTypes['WorkGroupResponse']> = {
  result?: Resolver<Maybe<Array<Maybe<ResolversTypes['WorkGroup']>>>, ParentType, ContextType>;
  next?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type WorkGroupShortResolvers<ContextType = any, ParentType extends ResolversParentTypes['WorkGroupShort'] = ResolversParentTypes['WorkGroupShort']> = {
  GROUP_ID?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  GROUP_NAME?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ROLE?: Resolver<Maybe<ResolversTypes['RoleGroup']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type YandexMetrikaApiResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['YandexMetrikaApiResponse'] = ResolversParentTypes['YandexMetrikaApiResponse']> = {
  query?: Resolver<ResolversTypes['QueryType'], ParentType, ContextType>;
  data?: Resolver<Array<Maybe<ResolversTypes['DataType']>>, ParentType, ContextType>;
  errors?: Resolver<Maybe<ResolversTypes['ErrorType']>, ParentType, ContextType>;
  time_intervals?: Resolver<Maybe<Array<Maybe<Array<Maybe<ResolversTypes['String']>>>>>, ParentType, ContextType>;
  totals?: Resolver<Maybe<Array<Maybe<Array<Maybe<ResolversTypes['Int']>>>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Resolvers<ContextType = any> = {
  AdminResponse?: AdminResponseResolvers<ContextType>;
  AdminResult?: AdminResultResolvers<ContextType>;
  AdminTopvisor?: AdminTopvisorResolvers<ContextType>;
  AdminUser?: AdminUserResolvers<ContextType>;
  AdminYandexMetrika?: AdminYandexMetrikaResolvers<ContextType>;
  Attachment?: AttachmentResolvers<ContextType>;
  AttachmentResponse?: AttachmentResponseResolvers<ContextType>;
  BitrixUser?: BitrixUserResolvers<ContextType>;
  Counter?: CounterResolvers<ContextType>;
  DataType?: DataTypeResolvers<ContextType>;
  DeleteTaskMessageResponse?: DeleteTaskMessageResponseResolvers<ContextType>;
  Dimension?: DimensionResolvers<ContextType>;
  Errors?: ErrorsResolvers<ContextType>;
  ErrorType?: ErrorTypeResolvers<ContextType>;
  Feed?: FeedResolvers<ContextType>;
  FeedMessageResponse?: FeedMessageResponseResolvers<ContextType>;
  FeedResponse?: FeedResponseResolvers<ContextType>;
  Goal?: GoalResolvers<ContextType>;
  Keyword?: KeywordResolvers<ContextType>;
  Monitoring?: MonitoringResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  PositionData?: PositionDataResolvers<ContextType>;
  PositionResponse?: PositionResponseResolvers<ContextType>;
  Profile?: ProfileResolvers<ContextType>;
  Project?: ProjectResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  QueryType?: QueryTypeResolvers<ContextType>;
  Region?: RegionResolvers<ContextType>;
  Result?: ResultResolvers<ContextType>;
  Searcher?: SearcherResolvers<ContextType>;
  SendTaskMessageResponse?: SendTaskMessageResponseResolvers<ContextType>;
  shortTaskUser?: ShortTaskUserResolvers<ContextType>;
  SummaryChart?: SummaryChartResolvers<ContextType>;
  SummaryChartResponse?: SummaryChartResponseResolvers<ContextType>;
  Task?: TaskResolvers<ContextType>;
  TaskComment?: TaskCommentResolvers<ContextType>;
  TaskDetail?: TaskDetailResolvers<ContextType>;
  Tops?: TopsResolvers<ContextType>;
  Upload?: GraphQLScalarType;
  UploadFix?: GraphQLScalarType;
  WorkGroup?: WorkGroupResolvers<ContextType>;
  WorkGroupResponse?: WorkGroupResponseResolvers<ContextType>;
  WorkGroupShort?: WorkGroupShortResolvers<ContextType>;
  YandexMetrikaApiResponse?: YandexMetrikaApiResponseResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
