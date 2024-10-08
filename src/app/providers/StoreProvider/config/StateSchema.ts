import {
	AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ArticleDetailsSchema } from 'entities/Article';
import { CounterSchema } from 'entities/Counter';
import { ProfileSchema } from 'entities/Profile';
import { UserSchema } from 'entities/User';
import { AddNewCommentSchema } from 'features/addNewComment';
import { LoginSchema } from 'features/AuthByUsername';
import { ArticleDetailsCommentsSchema } from 'pages/ArticleDetailsPage';
import { ArticlesPageSchema } from 'pages/ArticlesPage';
import { NavigateOptions, To } from 'react-router-dom';

export interface StateSchema {
  counter: CounterSchema,
  user: UserSchema,
  articleDetails?: ArticleDetailsSchema,
  articleDetailsComments?: ArticleDetailsCommentsSchema,
  profile?: ProfileSchema,
  login?: LoginSchema,
  addNewComment?: AddNewCommentSchema,
  articlesPage?: ArticlesPageSchema,
}

export type StateSchemaKey = keyof StateSchema;

export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>,
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>,
  add: (key: StateSchemaKey, reducer: Reducer) => void,
  remove: (key: StateSchemaKey) => void,
  getMountedReducer: () => MountedReducers,
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager,
}

export interface ThunkExtra {
  api: AxiosInstance,
}

export interface ThunkConfig<T> {
  rejectValue: T,
  extra: ThunkExtra,
  state: StateSchema,
}
