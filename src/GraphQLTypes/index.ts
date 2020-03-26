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

export enum BooleanEnum {
  Y = 'Y',
  N = 'N'
}

export type DeleteTaskMessageResponse = {
   __typename?: 'DeleteTaskMessageResponse';
  error?: Maybe<Scalars['String']>;
  error_message?: Maybe<Scalars['String']>;
  result?: Maybe<Scalars['Boolean']>;
};

export enum Duration {
  Days = 'days',
  Hours = 'hours',
  Minutes = 'minutes'
}

export enum Gender {
  M = 'M',
  F = 'F'
}

export type Mutation = {
   __typename?: 'Mutation';
  DeleteTaskMessage: DeleteTaskMessageResponse;
  SendTaskComments: SendTaskMessageResponse;
};


export type MutationDeleteTaskMessageArgs = {
  taskId: Scalars['ID'];
  messageId: Scalars['ID'];
};


export type MutationSendTaskCommentsArgs = {
  taskId: Scalars['ID'];
  message: Scalars['String'];
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

export type Query = {
   __typename?: 'Query';
  GetGroupById?: Maybe<WorkGroup>;
  GetGroupsTasks: Array<Maybe<Task>>;
  GetGroupsUsers: Array<Maybe<User>>;
  GetProfile: Profile;
  GetTaskComments: Array<Maybe<TaskComment>>;
  GetUserByID?: Maybe<User>;
  GetUserGroups: Array<Maybe<WorkGroupShort>>;
};


export type QueryGetGroupByIdArgs = {
  groupId?: Maybe<Scalars['ID']>;
};


export type QueryGetGroupsTasksArgs = {
  groupId?: Maybe<Scalars['ID']>;
};


export type QueryGetGroupsUsersArgs = {
  groupId?: Maybe<Scalars['ID']>;
};


export type QueryGetTaskCommentsArgs = {
  taskId?: Maybe<Scalars['ID']>;
};


export type QueryGetUserByIdArgs = {
  userId?: Maybe<Scalars['ID']>;
};

export enum RoleGroup {
  A = 'A',
  E = 'E',
  K = 'K'
}

export type SendTaskMessageResponse = {
   __typename?: 'SendTaskMessageResponse';
  error?: Maybe<Scalars['String']>;
  error_message?: Maybe<Scalars['String']>;
  result?: Maybe<Scalars['ID']>;
};

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

export type WorkGroupShort = {
   __typename?: 'WorkGroupShort';
  GROUP_ID?: Maybe<Scalars['ID']>;
  GROUP_NAME?: Maybe<Scalars['String']>;
  ROLE?: Maybe<RoleGroup>;
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
  WorkGroup: ResolverTypeWrapper<WorkGroup>,
  BooleanEnum: BooleanEnum,
  String: ResolverTypeWrapper<Scalars['String']>,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  Task: ResolverTypeWrapper<Task>,
  Duration: Duration,
  User: ResolverTypeWrapper<User>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  Gender: Gender,
  Profile: ResolverTypeWrapper<Profile>,
  TaskComment: ResolverTypeWrapper<TaskComment>,
  WorkGroupShort: ResolverTypeWrapper<WorkGroupShort>,
  RoleGroup: RoleGroup,
  Mutation: ResolverTypeWrapper<{}>,
  DeleteTaskMessageResponse: ResolverTypeWrapper<DeleteTaskMessageResponse>,
  SendTaskMessageResponse: ResolverTypeWrapper<SendTaskMessageResponse>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  ID: Scalars['ID'],
  WorkGroup: WorkGroup,
  BooleanEnum: BooleanEnum,
  String: Scalars['String'],
  Int: Scalars['Int'],
  Task: Task,
  Duration: Duration,
  User: User,
  Boolean: Scalars['Boolean'],
  Gender: Gender,
  Profile: Profile,
  TaskComment: TaskComment,
  WorkGroupShort: WorkGroupShort,
  RoleGroup: RoleGroup,
  Mutation: {},
  DeleteTaskMessageResponse: DeleteTaskMessageResponse,
  SendTaskMessageResponse: SendTaskMessageResponse,
};

export type DeleteTaskMessageResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteTaskMessageResponse'] = ResolversParentTypes['DeleteTaskMessageResponse']> = {
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  error_message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  result?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  DeleteTaskMessage?: Resolver<ResolversTypes['DeleteTaskMessageResponse'], ParentType, ContextType, RequireFields<MutationDeleteTaskMessageArgs, 'taskId' | 'messageId'>>,
  SendTaskComments?: Resolver<ResolversTypes['SendTaskMessageResponse'], ParentType, ContextType, RequireFields<MutationSendTaskCommentsArgs, 'taskId' | 'message'>>,
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

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  GetGroupById?: Resolver<Maybe<ResolversTypes['WorkGroup']>, ParentType, ContextType, RequireFields<QueryGetGroupByIdArgs, never>>,
  GetGroupsTasks?: Resolver<Array<Maybe<ResolversTypes['Task']>>, ParentType, ContextType, RequireFields<QueryGetGroupsTasksArgs, never>>,
  GetGroupsUsers?: Resolver<Array<Maybe<ResolversTypes['User']>>, ParentType, ContextType, RequireFields<QueryGetGroupsUsersArgs, never>>,
  GetProfile?: Resolver<ResolversTypes['Profile'], ParentType, ContextType>,
  GetTaskComments?: Resolver<Array<Maybe<ResolversTypes['TaskComment']>>, ParentType, ContextType, RequireFields<QueryGetTaskCommentsArgs, never>>,
  GetUserByID?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryGetUserByIdArgs, never>>,
  GetUserGroups?: Resolver<Array<Maybe<ResolversTypes['WorkGroupShort']>>, ParentType, ContextType>,
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

export type WorkGroupShortResolvers<ContextType = any, ParentType extends ResolversParentTypes['WorkGroupShort'] = ResolversParentTypes['WorkGroupShort']> = {
  GROUP_ID?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  GROUP_NAME?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  ROLE?: Resolver<Maybe<ResolversTypes['RoleGroup']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type Resolvers<ContextType = any> = {
  DeleteTaskMessageResponse?: DeleteTaskMessageResponseResolvers<ContextType>,
  Mutation?: MutationResolvers<ContextType>,
  Profile?: ProfileResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  SendTaskMessageResponse?: SendTaskMessageResponseResolvers<ContextType>,
  Task?: TaskResolvers<ContextType>,
  TaskComment?: TaskCommentResolvers<ContextType>,
  User?: UserResolvers<ContextType>,
  WorkGroup?: WorkGroupResolvers<ContextType>,
  WorkGroupShort?: WorkGroupShortResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
