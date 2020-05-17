import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
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
  metrics: Array<Maybe<Scalars['Int']>>;
};

export type DeleteTaskMessageResponse = {
   __typename?: 'DeleteTaskMessageResponse';
  error?: Maybe<Scalars['String']>;
  error_message?: Maybe<Scalars['String']>;
  result?: Maybe<Scalars['Boolean']>;
};

export type Dimension = {
   __typename?: 'Dimension';
  name: Scalars['String'];
  icon_id: Scalars['ID'];
  icon_type: Scalars['String'];
  id: Scalars['ID'];
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
  AUTHOR: User;
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

export enum Gender {
  M = 'M',
  F = 'F'
}

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
  AddTopvisorProject?: Maybe<Project>;
  AddYandexMetrikaCounter: Counter;
  DeleteTaskMessage: DeleteTaskMessageResponse;
  SendTaskMessage: SendTaskMessageResponse;
};


export type MutationAddTopvisorProjectArgs = {
  projectId: Scalars['Int'];
};


export type MutationAddYandexMetrikaCounterArgs = {
  counterId: Scalars['Int'];
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
  GetCounterStatus: Counter;
  GetFeed: FeedResponse;
  GetGroupById?: Maybe<WorkGroup>;
  GetGroupsTasks: Array<Maybe<Task>>;
  GetGroupsUsers: Array<Maybe<User>>;
  GetProfile: Profile;
  GetTaskComments: Array<Maybe<TaskComment>>;
  GetTopvisorProjectById?: Maybe<Project>;
  GetTopvisorProjectByUrl?: Maybe<Project>;
  GetUserByID?: Maybe<User>;
  GetUserGroups?: Maybe<WorkGroupResponse>;
  GetYandexMetrics: YandexMetrikaApiResponse;
  SearchGroupByName: Array<Maybe<WorkGroup>>;
};


export type QueryGetAttachmentArgs = {
  id: Scalars['ID'];
};


export type QueryGetCounterStatusArgs = {
  counter: Scalars['Int'];
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


export type QueryGetTaskCommentsArgs = {
  taskId: Scalars['ID'];
};


export type QueryGetTopvisorProjectByIdArgs = {
  projectId: Scalars['Int'];
};


export type QueryGetTopvisorProjectByUrlArgs = {
  projectUrl: Scalars['String'];
};


export type QueryGetUserByIdArgs = {
  userId: Scalars['ID'];
};


export type QueryGetUserGroupsArgs = {
  start?: Maybe<Scalars['Int']>;
};


export type QueryGetYandexMetricsArgs = {
  metrics: Scalars['String'];
  dimensions?: Maybe<Scalars['String']>;
  date1?: Maybe<Scalars['String']>;
  date2?: Maybe<Scalars['String']>;
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

export enum Status {
  Active = 'Active',
  Deleted = 'Deleted'
}

export type Task = {
   __typename?: 'Task';
  CHANGED_BY?: Maybe<Scalars['ID']>;
  CHANGED_DATE?: Maybe<Scalars['String']>;
  CLOSED_BY?: Maybe<Scalars['ID']>;
  CLOSED_DATE?: Maybe<Scalars['String']>;
  CREATED_BY?: Maybe<Scalars['ID']>;
  CREATED_BY_LAST_NAME?: Maybe<Scalars['String']>;
  CREATED_BY_NAME?: Maybe<Scalars['String']>;
  CREATED_BY_SECOND_NAME?: Maybe<Scalars['String']>;
  CREATED_DATE?: Maybe<Scalars['String']>;
  DATE_START?: Maybe<Scalars['String']>;
  DEADLINE?: Maybe<Scalars['String']>;
  DECLINE_REASON?: Maybe<Scalars['String']>;
  DESCRIPTION?: Maybe<Scalars['String']>;
  DURATION_FACT?: Maybe<Scalars['Int']>;
  DURATION_PLAN?: Maybe<Scalars['Int']>;
  DURATION_TYPE?: Maybe<Duration>;
  END_DATE_PLAN?: Maybe<Scalars['String']>;
  GROUP_ID?: Maybe<Scalars['ID']>;
  ID?: Maybe<Scalars['ID']>;
  PARENT_ID?: Maybe<Scalars['ID']>;
  PRIORITY?: Maybe<Scalars['String']>;
  REAL_STATUS?: Maybe<Scalars['Int']>;
  RESPONSIBLE_ID?: Maybe<Scalars['ID']>;
  RESPONSIBLE_LAST_NAME?: Maybe<Scalars['String']>;
  RESPONSIBLE_NAME?: Maybe<Scalars['String']>;
  RESPONSIBLE_SECOND_NAME?: Maybe<Scalars['String']>;
  STAGE_ID?: Maybe<Scalars['Int']>;
  START_DATE_PLAN?: Maybe<Scalars['String']>;
  STATUS?: Maybe<Scalars['Int']>;
  STATUS_CHANGED_BY?: Maybe<Scalars['String']>;
  STATUS_CHANGED_DATE?: Maybe<Scalars['String']>;
  TIME_ESTIMATE?: Maybe<Scalars['Int']>;
  TITLE?: Maybe<Scalars['String']>;
};

export type TaskComment = {
   __typename?: 'TaskComment';
  AUTHOR_EMAIL?: Maybe<Scalars['String']>;
  AUTHOR_ID?: Maybe<Scalars['ID']>;
  AUTHOR_NAME?: Maybe<Scalars['String']>;
  ID?: Maybe<Scalars['ID']>;
  POST_DATE?: Maybe<Scalars['String']>;
  POST_MESSAGE?: Maybe<Scalars['String']>;
  POST_MESSAGE_HTML?: Maybe<Scalars['String']>;
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
  Duration: Duration,
  Profile: ResolverTypeWrapper<Profile>,
  TaskComment: ResolverTypeWrapper<TaskComment>,
  Project: ResolverTypeWrapper<Project>,
  Searcher: ResolverTypeWrapper<Searcher>,
  Region: ResolverTypeWrapper<Region>,
  WorkGroupResponse: ResolverTypeWrapper<WorkGroupResponse>,
  YandexMetrikaApiResponse: ResolverTypeWrapper<YandexMetrikaApiResponse>,
  DataType: ResolverTypeWrapper<DataType>,
  Dimension: ResolverTypeWrapper<Dimension>,
  QueryType: ResolverTypeWrapper<QueryType>,
  Mutation: ResolverTypeWrapper<{}>,
  DeleteTaskMessageResponse: ResolverTypeWrapper<DeleteTaskMessageResponse>,
  SendTaskMessageResponse: ResolverTypeWrapper<SendTaskMessageResponse>,
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
  Duration: Duration,
  Profile: Profile,
  TaskComment: TaskComment,
  Project: Project,
  Searcher: Searcher,
  Region: Region,
  WorkGroupResponse: WorkGroupResponse,
  YandexMetrikaApiResponse: YandexMetrikaApiResponse,
  DataType: DataType,
  Dimension: Dimension,
  QueryType: QueryType,
  Mutation: {},
  DeleteTaskMessageResponse: DeleteTaskMessageResponse,
  SendTaskMessageResponse: SendTaskMessageResponse,
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
  metrics?: Resolver<Array<Maybe<ResolversTypes['Int']>>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type DeleteTaskMessageResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteTaskMessageResponse'] = ResolversParentTypes['DeleteTaskMessageResponse']> = {
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  error_message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  result?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type DimensionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Dimension'] = ResolversParentTypes['Dimension']> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  icon_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  icon_type?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
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
  AUTHOR?: Resolver<ResolversTypes['User'], ParentType, ContextType>,
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
  AddTopvisorProject?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType, RequireFields<MutationAddTopvisorProjectArgs, 'projectId'>>,
  AddYandexMetrikaCounter?: Resolver<ResolversTypes['Counter'], ParentType, ContextType, RequireFields<MutationAddYandexMetrikaCounterArgs, 'counterId'>>,
  DeleteTaskMessage?: Resolver<ResolversTypes['DeleteTaskMessageResponse'], ParentType, ContextType, RequireFields<MutationDeleteTaskMessageArgs, 'taskId' | 'messageId'>>,
  SendTaskMessage?: Resolver<ResolversTypes['SendTaskMessageResponse'], ParentType, ContextType, RequireFields<MutationSendTaskMessageArgs, 'taskId' | 'message'>>,
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
  GetCounterStatus?: Resolver<ResolversTypes['Counter'], ParentType, ContextType, RequireFields<QueryGetCounterStatusArgs, 'counter'>>,
  GetFeed?: Resolver<ResolversTypes['FeedResponse'], ParentType, ContextType, RequireFields<QueryGetFeedArgs, 'start'>>,
  GetGroupById?: Resolver<Maybe<ResolversTypes['WorkGroup']>, ParentType, ContextType, RequireFields<QueryGetGroupByIdArgs, 'groupId'>>,
  GetGroupsTasks?: Resolver<Array<Maybe<ResolversTypes['Task']>>, ParentType, ContextType, RequireFields<QueryGetGroupsTasksArgs, 'groupId'>>,
  GetGroupsUsers?: Resolver<Array<Maybe<ResolversTypes['User']>>, ParentType, ContextType, RequireFields<QueryGetGroupsUsersArgs, 'groupId'>>,
  GetProfile?: Resolver<ResolversTypes['Profile'], ParentType, ContextType>,
  GetTaskComments?: Resolver<Array<Maybe<ResolversTypes['TaskComment']>>, ParentType, ContextType, RequireFields<QueryGetTaskCommentsArgs, 'taskId'>>,
  GetTopvisorProjectById?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType, RequireFields<QueryGetTopvisorProjectByIdArgs, 'projectId'>>,
  GetTopvisorProjectByUrl?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType, RequireFields<QueryGetTopvisorProjectByUrlArgs, 'projectUrl'>>,
  GetUserByID?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryGetUserByIdArgs, 'userId'>>,
  GetUserGroups?: Resolver<Maybe<ResolversTypes['WorkGroupResponse']>, ParentType, ContextType, RequireFields<QueryGetUserGroupsArgs, 'start'>>,
  GetYandexMetrics?: Resolver<ResolversTypes['YandexMetrikaApiResponse'], ParentType, ContextType, RequireFields<QueryGetYandexMetricsArgs, 'metrics'>>,
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

export type TaskResolvers<ContextType = any, ParentType extends ResolversParentTypes['Task'] = ResolversParentTypes['Task']> = {
  CHANGED_BY?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  CHANGED_DATE?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  CLOSED_BY?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  CLOSED_DATE?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  CREATED_BY?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  CREATED_BY_LAST_NAME?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  CREATED_BY_NAME?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  CREATED_BY_SECOND_NAME?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  CREATED_DATE?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  DATE_START?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  DEADLINE?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  DECLINE_REASON?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  DESCRIPTION?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  DURATION_FACT?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  DURATION_PLAN?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  DURATION_TYPE?: Resolver<Maybe<ResolversTypes['Duration']>, ParentType, ContextType>,
  END_DATE_PLAN?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  GROUP_ID?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  ID?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  PARENT_ID?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  PRIORITY?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  REAL_STATUS?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  RESPONSIBLE_ID?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  RESPONSIBLE_LAST_NAME?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  RESPONSIBLE_NAME?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  RESPONSIBLE_SECOND_NAME?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  STAGE_ID?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  START_DATE_PLAN?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  STATUS?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  STATUS_CHANGED_BY?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  STATUS_CHANGED_DATE?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  TIME_ESTIMATE?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  TITLE?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type TaskCommentResolvers<ContextType = any, ParentType extends ResolversParentTypes['TaskComment'] = ResolversParentTypes['TaskComment']> = {
  AUTHOR_EMAIL?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  AUTHOR_ID?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  AUTHOR_NAME?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  ID?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  POST_DATE?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  POST_MESSAGE?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  POST_MESSAGE_HTML?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

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
  Monitoring?: MonitoringResolvers<ContextType>,
  Mutation?: MutationResolvers<ContextType>,
  Profile?: ProfileResolvers<ContextType>,
  Project?: ProjectResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  QueryType?: QueryTypeResolvers<ContextType>,
  Region?: RegionResolvers<ContextType>,
  Searcher?: SearcherResolvers<ContextType>,
  SendTaskMessageResponse?: SendTaskMessageResponseResolvers<ContextType>,
  Task?: TaskResolvers<ContextType>,
  TaskComment?: TaskCommentResolvers<ContextType>,
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
