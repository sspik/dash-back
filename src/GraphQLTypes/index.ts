import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  UploadFix: any;
  Upload: any;
};

export type Attachment = {
   __typename?: 'Attachment';
  CREATED_BY: Scalars['ID'];
  CREATE_TIME: Scalars['String'];
  DOWNLOAD_URL: Scalars['String'];
  ID: Scalars['ID'];
  NAME: Scalars['String'];
  OBJECT_ID: Scalars['ID'];
  SIZE: Scalars['Int'];
};

export type AttachmentResponse = {
   __typename?: 'AttachmentResponse';
  result?: Maybe<Attachment>;
};

export enum BooleanEnum {
  Y = 'Y',
  N = 'N'
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
  code?: Maybe<Scalars['String']>;
  code_status?: Maybe<CodeStatus>;
  create_time?: Maybe<Scalars['String']>;
  errors?: Maybe<ErrorType>;
  favorite?: Maybe<Scalars['Int']>;
  filter_robots?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  mirrors?: Maybe<Array<Maybe<Scalars['String']>>>;
  monitoring?: Maybe<Monitoring>;
  name?: Maybe<Scalars['String']>;
  owner_login?: Maybe<Scalars['String']>;
  permission?: Maybe<Permission>;
  site?: Maybe<Scalars['String']>;
  status?: Maybe<Status>;
  time_zone_name?: Maybe<Scalars['String']>;
  type?: Maybe<CounterType>;
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
  AUTHOR?: Maybe<User>;
  AUTHOR_ID: Scalars['String'];
  DETAIL_TEXT: Scalars['String'];
  DATE_PUBLISH: Scalars['String'];
  FILES?: Maybe<Array<Maybe<Attachment>>>;
};

export type FeedResponse = {
   __typename?: 'FeedResponse';
  next?: Maybe<Scalars['Int']>;
  result: Array<Maybe<Feed>>;
  total: Scalars['Int'];
};

export type File = {
   __typename?: 'File';
  DOWNLOAD_URL: Scalars['String'];
  ID: Scalars['ID'];
  NAME: Scalars['String'];
};

export enum Gender {
  M = 'M',
  F = 'F'
}

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
  AttachmentUpload: Array<Maybe<File>>;
  DeleteTaskMessage: DeleteTaskMessageResponse;
  SendTaskMessage: SendTaskMessageResponse;
};


export type MutationAttachmentUploadArgs = {
  folderId: Scalars['ID'];
  files: Array<Scalars['UploadFix']>;
};


export type MutationDeleteTaskMessageArgs = {
  taskId: Scalars['ID'];
  messageId: Scalars['ID'];
};


export type MutationSendTaskMessageArgs = {
  taskId: Scalars['ID'];
  message: Scalars['String'];
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
  ADMIN?: Maybe<Scalars['Boolean']>;
  ID?: Maybe<Scalars['ID']>;
  LAST_NAME?: Maybe<Scalars['String']>;
  NAME?: Maybe<Scalars['String']>;
  PERSONAL_GENDER?: Maybe<Gender>;
  PERSONAL_PHOTO?: Maybe<Scalars['String']>;
};

export type Project = {
   __typename?: 'Project';
  id: Scalars['ID'];
  name: Scalars['String'];
  searchers: Array<Searcher>;
  site: Scalars['String'];
};

export type Query = {
   __typename?: 'Query';
  GetAttachment: AttachmentResponse;
  GetCounter: Counter;
  GetFeed: FeedResponse;
  GetGroupById?: Maybe<WorkGroup>;
  GetGroupsTasks: Array<Maybe<Task>>;
  GetGroupsUsers: Array<Maybe<User>>;
  GetProfile: Profile;
  GetTaskByID?: Maybe<TaskDetail>;
  GetTaskComments: Array<Maybe<TaskComment>>;
  GetTopvisorPositions: PositionResponse;
  GetTopvisorProject?: Maybe<Project>;
  GetTopvisorSummaryChart?: Maybe<SummaryChartResponse>;
  GetUserByID?: Maybe<User>;
  GetUserGroups?: Maybe<WorkGroupResponse>;
  GetYandexMetrics: YandexMetrikaApiResponse;
  SearchGroupByName: Array<Maybe<WorkGroup>>;
};


export type QueryGetAttachmentArgs = {
  id: Scalars['ID'];
};


export type QueryGetCounterArgs = {
  bitrixGroupId: Scalars['ID'];
};


export type QueryGetFeedArgs = {
  start?: Maybe<Scalars['Int']>;
};


export type QueryGetGroupByIdArgs = {
  groupId: Scalars['ID'];
};


export type QueryGetGroupsTasksArgs = {
  groupId: Scalars['ID'];
};


export type QueryGetGroupsUsersArgs = {
  groupId: Scalars['ID'];
};


export type QueryGetTaskByIdArgs = {
  taskId: Scalars['ID'];
};


export type QueryGetTaskCommentsArgs = {
  taskId: Scalars['ID'];
};


export type QueryGetTopvisorPositionsArgs = {
  bitrixGroupId: Scalars['ID'];
  projectId: Scalars['ID'];
  regionIndexes: Array<Scalars['ID']>;
  date1: Scalars['String'];
  date2: Scalars['String'];
};


export type QueryGetTopvisorProjectArgs = {
  bitrixGroupId: Scalars['ID'];
};


export type QueryGetTopvisorSummaryChartArgs = {
  bitrixGroupId: Scalars['ID'];
  projectId: Scalars['ID'];
  regionIndex: Scalars['ID'];
  date1: Scalars['String'];
  date2: Scalars['String'];
};


export type QueryGetUserByIdArgs = {
  userId: Scalars['ID'];
};


export type QueryGetUserGroupsArgs = {
  start?: Maybe<Scalars['Int']>;
};


export type QueryGetYandexMetricsArgs = {
  metrics?: Maybe<Scalars['String']>;
  dimensions?: Maybe<Scalars['String']>;
  date1?: Maybe<Scalars['String']>;
  date2?: Maybe<Scalars['String']>;
  bitrixGroupId: Scalars['ID'];
  preset?: Maybe<Scalars['String']>;
};


export type QuerySearchGroupByNameArgs = {
  name: Scalars['String'];
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
  enabled: Scalars['Int'];
  id: Scalars['ID'];
  key: Scalars['Int'];
  name: Scalars['String'];
  ord: Scalars['Int'];
  project_id: Scalars['ID'];
  regions: Array<Region>;
  searcher: Scalars['Int'];
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
  CLOSED_DATE: Scalars['String'];
  CREATED_BY_LAST_NAME: Scalars['String'];
  CREATED_BY_NAME: Scalars['String'];
  CREATED_DATE: Scalars['String'];
  DEADLINE: Scalars['String'];
  DESCRIPTION?: Maybe<Scalars['String']>;
  DURATION_FACT?: Maybe<Scalars['Int']>;
  ID: Scalars['ID'];
  STAGE_ID: Scalars['Int'];
  STATUS?: Maybe<Scalars['Int']>;
  TITLE: Scalars['String'];
};

export type TaskComment = {
   __typename?: 'TaskComment';
  ATTACHED_OBJECTS?: Maybe<Array<Maybe<Scalars['ID']>>>;
  AUTHOR?: Maybe<User>;
  AUTHOR_ID: Scalars['ID'];
  FILES?: Maybe<Array<Maybe<Attachment>>>;
  ID?: Maybe<Scalars['ID']>;
  POST_DATE?: Maybe<Scalars['String']>;
  POST_MESSAGE?: Maybe<Scalars['String']>;
};

export type TaskDetail = {
   __typename?: 'TaskDetail';
  closedDate?: Maybe<Scalars['String']>;
  createdDate?: Maybe<Scalars['String']>;
  creator?: Maybe<ShortTaskUser>;
  dateStart?: Maybe<Scalars['String']>;
  deadline?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  durationFact?: Maybe<Scalars['Int']>;
  durationPlan?: Maybe<Scalars['Int']>;
  durationType?: Maybe<Duration>;
  endDatePlan?: Maybe<Scalars['String']>;
  files?: Maybe<Array<Maybe<Attachment>>>;
  id: Scalars['ID'];
  priority?: Maybe<Scalars['Int']>;
  responsible?: Maybe<ShortTaskUser>;
  startDatePlan?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  timeEstimate?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  ufTaskWebdavFiles?: Maybe<Array<Maybe<Scalars['ID']>>>;
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



export type User = {
   __typename?: 'User';
  ACTIVE?: Maybe<Scalars['Boolean']>;
  ID?: Maybe<Scalars['ID']>;
  LAST_NAME?: Maybe<Scalars['String']>;
  NAME?: Maybe<Scalars['String']>;
  PERSONAL_BIRTHDAY?: Maybe<Scalars['String']>;
  PERSONAL_GENDER?: Maybe<Gender>;
  PERSONAL_ICQ?: Maybe<Scalars['String']>;
  PERSONAL_MOBILE?: Maybe<Scalars['String']>;
  PERSONAL_PHONE?: Maybe<Scalars['String']>;
  PERSONAL_PHOTO?: Maybe<Scalars['String']>;
  PERSONAL_PROFESSION?: Maybe<Scalars['String']>;
  PERSONAL_WWW?: Maybe<Scalars['String']>;
  SECOND_NAME?: Maybe<Scalars['String']>;
};

export type WorkGroup = {
   __typename?: 'WorkGroup';
  ACTIVE?: Maybe<BooleanEnum>;
  CLOSED?: Maybe<BooleanEnum>;
  DATE_ACTIVITY?: Maybe<Scalars['String']>;
  DATE_CREATE?: Maybe<Scalars['String']>;
  DATE_UPDATE?: Maybe<Scalars['String']>;
  DESCRIPTION?: Maybe<Scalars['String']>;
  ID?: Maybe<Scalars['ID']>;
  IS_EXTRANET?: Maybe<BooleanEnum>;
  KEYWORDS?: Maybe<Scalars['String']>;
  NAME?: Maybe<Scalars['String']>;
  NUMBER_OF_MEMBERS?: Maybe<Scalars['Int']>;
  OPENED?: Maybe<BooleanEnum>;
  OWNER_ID?: Maybe<Scalars['Int']>;
  PROJECT?: Maybe<BooleanEnum>;
  SITE_ID?: Maybe<Scalars['String']>;
  SUBJECT_ID?: Maybe<Scalars['Int']>;
  SUBJECT_NAME?: Maybe<Scalars['String']>;
  VISIBLE?: Maybe<BooleanEnum>;
};

export type WorkGroupResponse = {
   __typename?: 'WorkGroupResponse';
  next?: Maybe<Scalars['Int']>;
  result?: Maybe<Array<Maybe<WorkGroup>>>;
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
  data: Array<Maybe<DataType>>;
  errors?: Maybe<ErrorType>;
  query: QueryType;
  time_intervals?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  totals?: Maybe<Array<Maybe<Array<Maybe<Scalars['Int']>>>>>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

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

export type isTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

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
  Query: ResolverTypeWrapper<{}>,
  ID: ResolverTypeWrapper<Scalars['ID']>,
  AttachmentResponse: ResolverTypeWrapper<AttachmentResponse>,
  Attachment: ResolverTypeWrapper<Attachment>,
  String: ResolverTypeWrapper<Scalars['String']>,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  Counter: ResolverTypeWrapper<Counter>,
  CodeStatus: CodeStatus,
  ErrorType: ResolverTypeWrapper<ErrorType>,
  Errors: ResolverTypeWrapper<Errors>,
  Monitoring: ResolverTypeWrapper<Monitoring>,
  Permission: Permission,
  Status: Status,
  CounterType: CounterType,
  FeedResponse: ResolverTypeWrapper<FeedResponse>,
  Feed: ResolverTypeWrapper<Feed>,
  User: ResolverTypeWrapper<User>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  Gender: Gender,
  WorkGroup: ResolverTypeWrapper<WorkGroup>,
  BooleanEnum: BooleanEnum,
  Task: ResolverTypeWrapper<Task>,
  Profile: ResolverTypeWrapper<Profile>,
  TaskDetail: ResolverTypeWrapper<TaskDetail>,
  shortTaskUser: ResolverTypeWrapper<ShortTaskUser>,
  Duration: Duration,
  TaskComment: ResolverTypeWrapper<TaskComment>,
  PositionResponse: ResolverTypeWrapper<PositionResponse>,
  Result: ResolverTypeWrapper<Result>,
  Keyword: ResolverTypeWrapper<Keyword>,
  PositionData: ResolverTypeWrapper<PositionData>,
  Project: ResolverTypeWrapper<Project>,
  Searcher: ResolverTypeWrapper<Searcher>,
  Region: ResolverTypeWrapper<Region>,
  SummaryChartResponse: ResolverTypeWrapper<SummaryChartResponse>,
  SummaryChart: ResolverTypeWrapper<SummaryChart>,
  Tops: ResolverTypeWrapper<Tops>,
  Float: ResolverTypeWrapper<Scalars['Float']>,
  WorkGroupResponse: ResolverTypeWrapper<WorkGroupResponse>,
  YandexMetrikaApiResponse: ResolverTypeWrapper<YandexMetrikaApiResponse>,
  DataType: ResolverTypeWrapper<DataType>,
  Dimension: ResolverTypeWrapper<Dimension>,
  QueryType: ResolverTypeWrapper<QueryType>,
  Mutation: ResolverTypeWrapper<{}>,
  UploadFix: ResolverTypeWrapper<Scalars['UploadFix']>,
  File: ResolverTypeWrapper<File>,
  DeleteTaskMessageResponse: ResolverTypeWrapper<DeleteTaskMessageResponse>,
  SendTaskMessageResponse: ResolverTypeWrapper<SendTaskMessageResponse>,
  Upload: ResolverTypeWrapper<Scalars['Upload']>,
  WorkGroupShort: ResolverTypeWrapper<WorkGroupShort>,
  RoleGroup: RoleGroup,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  ID: Scalars['ID'],
  AttachmentResponse: AttachmentResponse,
  Attachment: Attachment,
  String: Scalars['String'],
  Int: Scalars['Int'],
  Counter: Counter,
  CodeStatus: CodeStatus,
  ErrorType: ErrorType,
  Errors: Errors,
  Monitoring: Monitoring,
  Permission: Permission,
  Status: Status,
  CounterType: CounterType,
  FeedResponse: FeedResponse,
  Feed: Feed,
  User: User,
  Boolean: Scalars['Boolean'],
  Gender: Gender,
  WorkGroup: WorkGroup,
  BooleanEnum: BooleanEnum,
  Task: Task,
  Profile: Profile,
  TaskDetail: TaskDetail,
  shortTaskUser: ShortTaskUser,
  Duration: Duration,
  TaskComment: TaskComment,
  PositionResponse: PositionResponse,
  Result: Result,
  Keyword: Keyword,
  PositionData: PositionData,
  Project: Project,
  Searcher: Searcher,
  Region: Region,
  SummaryChartResponse: SummaryChartResponse,
  SummaryChart: SummaryChart,
  Tops: Tops,
  Float: Scalars['Float'],
  WorkGroupResponse: WorkGroupResponse,
  YandexMetrikaApiResponse: YandexMetrikaApiResponse,
  DataType: DataType,
  Dimension: Dimension,
  QueryType: QueryType,
  Mutation: {},
  UploadFix: Scalars['UploadFix'],
  File: File,
  DeleteTaskMessageResponse: DeleteTaskMessageResponse,
  SendTaskMessageResponse: SendTaskMessageResponse,
  Upload: Scalars['Upload'],
  WorkGroupShort: WorkGroupShort,
  RoleGroup: RoleGroup,
};

export type AttachmentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Attachment'] = ResolversParentTypes['Attachment']> = {
  CREATED_BY?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  CREATE_TIME?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  DOWNLOAD_URL?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  ID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  NAME?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  OBJECT_ID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  SIZE?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type AttachmentResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['AttachmentResponse'] = ResolversParentTypes['AttachmentResponse']> = {
  result?: Resolver<Maybe<ResolversTypes['Attachment']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type CounterResolvers<ContextType = any, ParentType extends ResolversParentTypes['Counter'] = ResolversParentTypes['Counter']> = {
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  code_status?: Resolver<Maybe<ResolversTypes['CodeStatus']>, ParentType, ContextType>,
  create_time?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  errors?: Resolver<Maybe<ResolversTypes['ErrorType']>, ParentType, ContextType>,
  favorite?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  filter_robots?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  mirrors?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>,
  monitoring?: Resolver<Maybe<ResolversTypes['Monitoring']>, ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  owner_login?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  permission?: Resolver<Maybe<ResolversTypes['Permission']>, ParentType, ContextType>,
  site?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  status?: Resolver<Maybe<ResolversTypes['Status']>, ParentType, ContextType>,
  time_zone_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  type?: Resolver<Maybe<ResolversTypes['CounterType']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type DataTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['DataType'] = ResolversParentTypes['DataType']> = {
  dimensions?: Resolver<Array<Maybe<ResolversTypes['Dimension']>>, ParentType, ContextType>,
  metrics?: Resolver<Array<Maybe<Array<Maybe<ResolversTypes['Int']>>>>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type DeleteTaskMessageResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteTaskMessageResponse'] = ResolversParentTypes['DeleteTaskMessageResponse']> = {
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  error_message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  result?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type DimensionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Dimension'] = ResolversParentTypes['Dimension']> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  icon_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  icon_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type ErrorsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Errors'] = ResolversParentTypes['Errors']> = {
  error_type?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type ErrorTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ErrorType'] = ResolversParentTypes['ErrorType']> = {
  errors?: Resolver<Array<Maybe<ResolversTypes['Errors']>>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type FeedResolvers<ContextType = any, ParentType extends ResolversParentTypes['Feed'] = ResolversParentTypes['Feed']> = {
  ID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  AUTHOR?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  AUTHOR_ID?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  DETAIL_TEXT?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  DATE_PUBLISH?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  FILES?: Resolver<Maybe<Array<Maybe<ResolversTypes['Attachment']>>>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type FeedResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['FeedResponse'] = ResolversParentTypes['FeedResponse']> = {
  next?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  result?: Resolver<Array<Maybe<ResolversTypes['Feed']>>, ParentType, ContextType>,
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type FileResolvers<ContextType = any, ParentType extends ResolversParentTypes['File'] = ResolversParentTypes['File']> = {
  DOWNLOAD_URL?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  ID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  NAME?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type KeywordResolvers<ContextType = any, ParentType extends ResolversParentTypes['Keyword'] = ResolversParentTypes['Keyword']> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  positionsData?: Resolver<Maybe<Array<Maybe<ResolversTypes['PositionData']>>>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type MonitoringResolvers<ContextType = any, ParentType extends ResolversParentTypes['Monitoring'] = ResolversParentTypes['Monitoring']> = {
  enable_monitoring?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  emails?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>,
  sms_allowed?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  enable_sms?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  sms_time?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  phones?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>,
  phone_ids?: Resolver<Array<Maybe<ResolversTypes['ID']>>, ParentType, ContextType>,
  possible_phones?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>,
  possible_phone_ids?: Resolver<Array<Maybe<ResolversTypes['ID']>>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  AttachmentUpload?: Resolver<Array<Maybe<ResolversTypes['File']>>, ParentType, ContextType, RequireFields<MutationAttachmentUploadArgs, 'folderId' | 'files'>>,
  DeleteTaskMessage?: Resolver<ResolversTypes['DeleteTaskMessageResponse'], ParentType, ContextType, RequireFields<MutationDeleteTaskMessageArgs, 'taskId' | 'messageId'>>,
  SendTaskMessage?: Resolver<ResolversTypes['SendTaskMessageResponse'], ParentType, ContextType, RequireFields<MutationSendTaskMessageArgs, 'taskId' | 'message'>>,
};

export type PositionDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['PositionData'] = ResolversParentTypes['PositionData']> = {
  data?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  regionIndex?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  position?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type PositionResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['PositionResponse'] = ResolversParentTypes['PositionResponse']> = {
  result?: Resolver<Maybe<ResolversTypes['Result']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type ProfileResolvers<ContextType = any, ParentType extends ResolversParentTypes['Profile'] = ResolversParentTypes['Profile']> = {
  ADMIN?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  ID?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  LAST_NAME?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  NAME?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  PERSONAL_GENDER?: Resolver<Maybe<ResolversTypes['Gender']>, ParentType, ContextType>,
  PERSONAL_PHOTO?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type ProjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['Project'] = ResolversParentTypes['Project']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  searchers?: Resolver<Array<ResolversTypes['Searcher']>, ParentType, ContextType>,
  site?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  GetAttachment?: Resolver<ResolversTypes['AttachmentResponse'], ParentType, ContextType, RequireFields<QueryGetAttachmentArgs, 'id'>>,
  GetCounter?: Resolver<ResolversTypes['Counter'], ParentType, ContextType, RequireFields<QueryGetCounterArgs, 'bitrixGroupId'>>,
  GetFeed?: Resolver<ResolversTypes['FeedResponse'], ParentType, ContextType, RequireFields<QueryGetFeedArgs, 'start'>>,
  GetGroupById?: Resolver<Maybe<ResolversTypes['WorkGroup']>, ParentType, ContextType, RequireFields<QueryGetGroupByIdArgs, 'groupId'>>,
  GetGroupsTasks?: Resolver<Array<Maybe<ResolversTypes['Task']>>, ParentType, ContextType, RequireFields<QueryGetGroupsTasksArgs, 'groupId'>>,
  GetGroupsUsers?: Resolver<Array<Maybe<ResolversTypes['User']>>, ParentType, ContextType, RequireFields<QueryGetGroupsUsersArgs, 'groupId'>>,
  GetProfile?: Resolver<ResolversTypes['Profile'], ParentType, ContextType>,
  GetTaskByID?: Resolver<Maybe<ResolversTypes['TaskDetail']>, ParentType, ContextType, RequireFields<QueryGetTaskByIdArgs, 'taskId'>>,
  GetTaskComments?: Resolver<Array<Maybe<ResolversTypes['TaskComment']>>, ParentType, ContextType, RequireFields<QueryGetTaskCommentsArgs, 'taskId'>>,
  GetTopvisorPositions?: Resolver<ResolversTypes['PositionResponse'], ParentType, ContextType, RequireFields<QueryGetTopvisorPositionsArgs, 'bitrixGroupId' | 'projectId' | 'regionIndexes' | 'date1' | 'date2'>>,
  GetTopvisorProject?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType, RequireFields<QueryGetTopvisorProjectArgs, 'bitrixGroupId'>>,
  GetTopvisorSummaryChart?: Resolver<Maybe<ResolversTypes['SummaryChartResponse']>, ParentType, ContextType, RequireFields<QueryGetTopvisorSummaryChartArgs, 'bitrixGroupId' | 'projectId' | 'regionIndex' | 'date1' | 'date2'>>,
  GetUserByID?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryGetUserByIdArgs, 'userId'>>,
  GetUserGroups?: Resolver<Maybe<ResolversTypes['WorkGroupResponse']>, ParentType, ContextType, RequireFields<QueryGetUserGroupsArgs, 'start'>>,
  GetYandexMetrics?: Resolver<ResolversTypes['YandexMetrikaApiResponse'], ParentType, ContextType, RequireFields<QueryGetYandexMetricsArgs, 'bitrixGroupId'>>,
  SearchGroupByName?: Resolver<Array<Maybe<ResolversTypes['WorkGroup']>>, ParentType, ContextType, RequireFields<QuerySearchGroupByNameArgs, 'name'>>,
};

export type QueryTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['QueryType'] = ResolversParentTypes['QueryType']> = {
  ids?: Resolver<Array<Maybe<ResolversTypes['Int']>>, ParentType, ContextType>,
  dimensions?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>,
  metrics?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>,
  sort?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>,
  date1?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  date2?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  limit?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  offcet?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  group?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  auto_group_size?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  quantile?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  offline_window?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  attribution?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  currency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  adfox_event_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type RegionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Region'] = ResolversParentTypes['Region']> = {
  searcher_key?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  key?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  lang?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  devise?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  depth?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  index?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  enabled?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  countryCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  areaName?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  domain?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type ResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['Result'] = ResolversParentTypes['Result']> = {
  keywords?: Resolver<Array<Maybe<ResolversTypes['Keyword']>>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type SearcherResolvers<ContextType = any, ParentType extends ResolversParentTypes['Searcher'] = ResolversParentTypes['Searcher']> = {
  enabled?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  key?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  ord?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  project_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  regions?: Resolver<Array<ResolversTypes['Region']>, ParentType, ContextType>,
  searcher?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type SendTaskMessageResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['SendTaskMessageResponse'] = ResolversParentTypes['SendTaskMessageResponse']> = {
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  error_message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  result?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type ShortTaskUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['shortTaskUser'] = ResolversParentTypes['shortTaskUser']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  link?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  icon?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type SummaryChartResolvers<ContextType = any, ParentType extends ResolversParentTypes['SummaryChart'] = ResolversParentTypes['SummaryChart']> = {
  tops?: Resolver<Maybe<ResolversTypes['Tops']>, ParentType, ContextType>,
  avg?: Resolver<Maybe<Array<Maybe<ResolversTypes['Float']>>>, ParentType, ContextType>,
  dates?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type SummaryChartResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['SummaryChartResponse'] = ResolversParentTypes['SummaryChartResponse']> = {
  result?: Resolver<Maybe<ResolversTypes['SummaryChart']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type TaskResolvers<ContextType = any, ParentType extends ResolversParentTypes['Task'] = ResolversParentTypes['Task']> = {
  CLOSED_DATE?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  CREATED_BY_LAST_NAME?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  CREATED_BY_NAME?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  CREATED_DATE?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  DEADLINE?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  DESCRIPTION?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  DURATION_FACT?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  ID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  STAGE_ID?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  STATUS?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  TITLE?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type TaskCommentResolvers<ContextType = any, ParentType extends ResolversParentTypes['TaskComment'] = ResolversParentTypes['TaskComment']> = {
  ATTACHED_OBJECTS?: Resolver<Maybe<Array<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType>,
  AUTHOR?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  AUTHOR_ID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  FILES?: Resolver<Maybe<Array<Maybe<ResolversTypes['Attachment']>>>, ParentType, ContextType>,
  ID?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  POST_DATE?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  POST_MESSAGE?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type TaskDetailResolvers<ContextType = any, ParentType extends ResolversParentTypes['TaskDetail'] = ResolversParentTypes['TaskDetail']> = {
  closedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  createdDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  creator?: Resolver<Maybe<ResolversTypes['shortTaskUser']>, ParentType, ContextType>,
  dateStart?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  deadline?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  durationFact?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  durationPlan?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  durationType?: Resolver<Maybe<ResolversTypes['Duration']>, ParentType, ContextType>,
  endDatePlan?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  files?: Resolver<Maybe<Array<Maybe<ResolversTypes['Attachment']>>>, ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  priority?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  responsible?: Resolver<Maybe<ResolversTypes['shortTaskUser']>, ParentType, ContextType>,
  startDatePlan?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  timeEstimate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  ufTaskWebdavFiles?: Resolver<Maybe<Array<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type TopsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Tops'] = ResolversParentTypes['Tops']> = {
  all?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>,
  top3?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>,
  top10?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>,
  top11_30?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>,
  top31_50?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>,
  top51_100?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>,
  top101_10000?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload'
}

export interface UploadFixScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['UploadFix'], any> {
  name: 'UploadFix'
}

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  ACTIVE?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  ID?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  LAST_NAME?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  NAME?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  PERSONAL_BIRTHDAY?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  PERSONAL_GENDER?: Resolver<Maybe<ResolversTypes['Gender']>, ParentType, ContextType>,
  PERSONAL_ICQ?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  PERSONAL_MOBILE?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  PERSONAL_PHONE?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  PERSONAL_PHOTO?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  PERSONAL_PROFESSION?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  PERSONAL_WWW?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  SECOND_NAME?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type WorkGroupResolvers<ContextType = any, ParentType extends ResolversParentTypes['WorkGroup'] = ResolversParentTypes['WorkGroup']> = {
  ACTIVE?: Resolver<Maybe<ResolversTypes['BooleanEnum']>, ParentType, ContextType>,
  CLOSED?: Resolver<Maybe<ResolversTypes['BooleanEnum']>, ParentType, ContextType>,
  DATE_ACTIVITY?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  DATE_CREATE?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  DATE_UPDATE?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  DESCRIPTION?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  ID?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  IS_EXTRANET?: Resolver<Maybe<ResolversTypes['BooleanEnum']>, ParentType, ContextType>,
  KEYWORDS?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  NAME?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  NUMBER_OF_MEMBERS?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  OPENED?: Resolver<Maybe<ResolversTypes['BooleanEnum']>, ParentType, ContextType>,
  OWNER_ID?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  PROJECT?: Resolver<Maybe<ResolversTypes['BooleanEnum']>, ParentType, ContextType>,
  SITE_ID?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  SUBJECT_ID?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  SUBJECT_NAME?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  VISIBLE?: Resolver<Maybe<ResolversTypes['BooleanEnum']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type WorkGroupResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['WorkGroupResponse'] = ResolversParentTypes['WorkGroupResponse']> = {
  next?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  result?: Resolver<Maybe<Array<Maybe<ResolversTypes['WorkGroup']>>>, ParentType, ContextType>,
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type WorkGroupShortResolvers<ContextType = any, ParentType extends ResolversParentTypes['WorkGroupShort'] = ResolversParentTypes['WorkGroupShort']> = {
  GROUP_ID?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  GROUP_NAME?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  ROLE?: Resolver<Maybe<ResolversTypes['RoleGroup']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type YandexMetrikaApiResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['YandexMetrikaApiResponse'] = ResolversParentTypes['YandexMetrikaApiResponse']> = {
  data?: Resolver<Array<Maybe<ResolversTypes['DataType']>>, ParentType, ContextType>,
  errors?: Resolver<Maybe<ResolversTypes['ErrorType']>, ParentType, ContextType>,
  query?: Resolver<ResolversTypes['QueryType'], ParentType, ContextType>,
  time_intervals?: Resolver<Maybe<Array<Maybe<Array<Maybe<ResolversTypes['String']>>>>>, ParentType, ContextType>,
  totals?: Resolver<Maybe<Array<Maybe<Array<Maybe<ResolversTypes['Int']>>>>>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type Resolvers<ContextType = any> = {
  Attachment?: AttachmentResolvers<ContextType>,
  AttachmentResponse?: AttachmentResponseResolvers<ContextType>,
  Counter?: CounterResolvers<ContextType>,
  DataType?: DataTypeResolvers<ContextType>,
  DeleteTaskMessageResponse?: DeleteTaskMessageResponseResolvers<ContextType>,
  Dimension?: DimensionResolvers<ContextType>,
  Errors?: ErrorsResolvers<ContextType>,
  ErrorType?: ErrorTypeResolvers<ContextType>,
  Feed?: FeedResolvers<ContextType>,
  FeedResponse?: FeedResponseResolvers<ContextType>,
  File?: FileResolvers<ContextType>,
  Keyword?: KeywordResolvers<ContextType>,
  Monitoring?: MonitoringResolvers<ContextType>,
  Mutation?: MutationResolvers<ContextType>,
  PositionData?: PositionDataResolvers<ContextType>,
  PositionResponse?: PositionResponseResolvers<ContextType>,
  Profile?: ProfileResolvers<ContextType>,
  Project?: ProjectResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  QueryType?: QueryTypeResolvers<ContextType>,
  Region?: RegionResolvers<ContextType>,
  Result?: ResultResolvers<ContextType>,
  Searcher?: SearcherResolvers<ContextType>,
  SendTaskMessageResponse?: SendTaskMessageResponseResolvers<ContextType>,
  shortTaskUser?: ShortTaskUserResolvers<ContextType>,
  SummaryChart?: SummaryChartResolvers<ContextType>,
  SummaryChartResponse?: SummaryChartResponseResolvers<ContextType>,
  Task?: TaskResolvers<ContextType>,
  TaskComment?: TaskCommentResolvers<ContextType>,
  TaskDetail?: TaskDetailResolvers<ContextType>,
  Tops?: TopsResolvers<ContextType>,
  Upload?: GraphQLScalarType,
  UploadFix?: GraphQLScalarType,
  User?: UserResolvers<ContextType>,
  WorkGroup?: WorkGroupResolvers<ContextType>,
  WorkGroupResponse?: WorkGroupResponseResolvers<ContextType>,
  WorkGroupShort?: WorkGroupShortResolvers<ContextType>,
  YandexMetrikaApiResponse?: YandexMetrikaApiResponseResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
