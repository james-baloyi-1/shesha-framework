/* Generated by restful-react */

import React from 'react';
import { Get, GetProps, useGet, UseGetProps, Mutate, MutateProps, useMutate, UseMutateProps } from 'restful-react';
export const SPEC_VERSION = 'v1';
export interface EventLogItem {
  message?: string | null;
  timeStamp?: string;
  level?: string | null;
}

export interface ValidationErrorInfo {
  message?: string | null;
  members?: string[] | null;
}

export interface ErrorInfo {
  code?: number;
  message?: string | null;
  details?: string | null;
  validationErrors?: ValidationErrorInfo[] | null;
}

export interface EventLogItemListAjaxResponse {
  targetUrl?: string | null;
  success?: boolean;
  error?: ErrorInfo;
  unAuthorizedRequest?: boolean;
  __abp?: boolean;
  result?: EventLogItem[] | null;
}

export interface AjaxResponseBase {
  targetUrl?: string | null;
  success?: boolean;
  error?: ErrorInfo;
  unAuthorizedRequest?: boolean;
  __abp?: boolean;
}

export interface FileStreamResultAjaxResponse {
  targetUrl?: string | null;
  success?: boolean;
  error?: ErrorInfo;
  unAuthorizedRequest?: boolean;
  __abp?: boolean;
  result?: string | null;
}

export interface Int64NullableEntityWithDisplayNameDto {
  id?: number | null;
  displayText?: string | null;
}

export interface GuidNullableEntityWithDisplayNameDto {
  id?: string | null;
  displayText?: string | null;
}

export interface ReferenceListItemValueDto {
  item?: string | null;
  itemValue?: number | null;
}

export interface ScheduledJobExecutionDto {
  id?: string;
  startedOn?: string | null;
  finishedOn?: string | null;
  startedBy?: Int64NullableEntityWithDisplayNameDto;
  job?: GuidNullableEntityWithDisplayNameDto;
  trigger?: GuidNullableEntityWithDisplayNameDto;
  errorMessage?: string | null;
  status?: ReferenceListItemValueDto;
}

export interface ScheduledJobExecutionDtoAjaxResponse {
  targetUrl?: string | null;
  success?: boolean;
  error?: ErrorInfo;
  unAuthorizedRequest?: boolean;
  __abp?: boolean;
  result?: ScheduledJobExecutionDto;
}

export interface ScheduledJobExecutionDtoPagedResultDto {
  items?: ScheduledJobExecutionDto[] | null;
  totalCount?: number;
}

export interface ScheduledJobExecutionDtoPagedResultDtoAjaxResponse {
  targetUrl?: string | null;
  success?: boolean;
  error?: ErrorInfo;
  unAuthorizedRequest?: boolean;
  __abp?: boolean;
  result?: ScheduledJobExecutionDtoPagedResultDto;
}

export interface ScheduledJobExecutionGetEventLogItemsQueryParams {
  id?: string;
  /**
   * The requested API version
   */
  'api-version'?: string;
}

export type ScheduledJobExecutionGetEventLogItemsProps = Omit<
  GetProps<EventLogItemListAjaxResponse, AjaxResponseBase, ScheduledJobExecutionGetEventLogItemsQueryParams, void>,
  'path'
>;

export const ScheduledJobExecutionGetEventLogItems = (props: ScheduledJobExecutionGetEventLogItemsProps) => (
  <Get<EventLogItemListAjaxResponse, AjaxResponseBase, ScheduledJobExecutionGetEventLogItemsQueryParams, void>
    path={`/api/services/Scheduler/ScheduledJobExecution/GetEventLogItems`}
    {...props}
  />
);

export type UseScheduledJobExecutionGetEventLogItemsProps = Omit<
  UseGetProps<EventLogItemListAjaxResponse, AjaxResponseBase, ScheduledJobExecutionGetEventLogItemsQueryParams, void>,
  'path'
>;

export const useScheduledJobExecutionGetEventLogItems = (props: UseScheduledJobExecutionGetEventLogItemsProps) =>
  useGet<EventLogItemListAjaxResponse, AjaxResponseBase, ScheduledJobExecutionGetEventLogItemsQueryParams, void>(
    `/api/services/Scheduler/ScheduledJobExecution/GetEventLogItems`,
    props
  );

export interface ScheduledJobExecutionDownloadLogFileQueryParams {
  id?: string;
  /**
   * The requested API version
   */
  'api-version'?: string;
}

export type ScheduledJobExecutionDownloadLogFileProps = Omit<
  GetProps<FileStreamResultAjaxResponse, AjaxResponseBase, ScheduledJobExecutionDownloadLogFileQueryParams, void>,
  'path'
>;

export const ScheduledJobExecutionDownloadLogFile = (props: ScheduledJobExecutionDownloadLogFileProps) => (
  <Get<FileStreamResultAjaxResponse, AjaxResponseBase, ScheduledJobExecutionDownloadLogFileQueryParams, void>
    path={`/api/services/Scheduler/ScheduledJobExecution/DownloadLogFile`}
    {...props}
  />
);

export type UseScheduledJobExecutionDownloadLogFileProps = Omit<
  UseGetProps<FileStreamResultAjaxResponse, AjaxResponseBase, ScheduledJobExecutionDownloadLogFileQueryParams, void>,
  'path'
>;

export const useScheduledJobExecutionDownloadLogFile = (props: UseScheduledJobExecutionDownloadLogFileProps) =>
  useGet<FileStreamResultAjaxResponse, AjaxResponseBase, ScheduledJobExecutionDownloadLogFileQueryParams, void>(
    `/api/services/Scheduler/ScheduledJobExecution/DownloadLogFile`,
    props
  );

export interface ScheduledJobExecutionGetQueryParams {
  id?: string;
  /**
   * The requested API version
   */
  'api-version'?: string;
}

export type ScheduledJobExecutionGetProps = Omit<
  GetProps<ScheduledJobExecutionDtoAjaxResponse, AjaxResponseBase, ScheduledJobExecutionGetQueryParams, void>,
  'path'
>;

export const ScheduledJobExecutionGet = (props: ScheduledJobExecutionGetProps) => (
  <Get<ScheduledJobExecutionDtoAjaxResponse, AjaxResponseBase, ScheduledJobExecutionGetQueryParams, void>
    path={`/api/services/Scheduler/ScheduledJobExecution/Get`}
    {...props}
  />
);

export type UseScheduledJobExecutionGetProps = Omit<
  UseGetProps<ScheduledJobExecutionDtoAjaxResponse, AjaxResponseBase, ScheduledJobExecutionGetQueryParams, void>,
  'path'
>;

export const useScheduledJobExecutionGet = (props: UseScheduledJobExecutionGetProps) =>
  useGet<ScheduledJobExecutionDtoAjaxResponse, AjaxResponseBase, ScheduledJobExecutionGetQueryParams, void>(
    `/api/services/Scheduler/ScheduledJobExecution/Get`,
    props
  );

export interface ScheduledJobExecutionGetAllQueryParams {
  sorting?: string | null;
  skipCount?: number;
  maxResultCount?: number;
  /**
   * The requested API version
   */
  'api-version'?: string;
}

export type ScheduledJobExecutionGetAllProps = Omit<
  GetProps<
    ScheduledJobExecutionDtoPagedResultDtoAjaxResponse,
    AjaxResponseBase,
    ScheduledJobExecutionGetAllQueryParams,
    void
  >,
  'path'
>;

export const ScheduledJobExecutionGetAll = (props: ScheduledJobExecutionGetAllProps) => (
  <Get<
    ScheduledJobExecutionDtoPagedResultDtoAjaxResponse,
    AjaxResponseBase,
    ScheduledJobExecutionGetAllQueryParams,
    void
  >
    path={`/api/services/Scheduler/ScheduledJobExecution/GetAll`}
    {...props}
  />
);

export type UseScheduledJobExecutionGetAllProps = Omit<
  UseGetProps<
    ScheduledJobExecutionDtoPagedResultDtoAjaxResponse,
    AjaxResponseBase,
    ScheduledJobExecutionGetAllQueryParams,
    void
  >,
  'path'
>;

export const useScheduledJobExecutionGetAll = (props: UseScheduledJobExecutionGetAllProps) =>
  useGet<
    ScheduledJobExecutionDtoPagedResultDtoAjaxResponse,
    AjaxResponseBase,
    ScheduledJobExecutionGetAllQueryParams,
    void
  >(`/api/services/Scheduler/ScheduledJobExecution/GetAll`, props);

export interface ScheduledJobExecutionCreateQueryParams {
  /**
   * The requested API version
   */
  'api-version'?: string;
}

export type ScheduledJobExecutionCreateProps = Omit<
  MutateProps<
    ScheduledJobExecutionDtoAjaxResponse,
    AjaxResponseBase,
    ScheduledJobExecutionCreateQueryParams,
    ScheduledJobExecutionDto,
    void
  >,
  'path' | 'verb'
>;

export const ScheduledJobExecutionCreate = (props: ScheduledJobExecutionCreateProps) => (
  <Mutate<
    ScheduledJobExecutionDtoAjaxResponse,
    AjaxResponseBase,
    ScheduledJobExecutionCreateQueryParams,
    ScheduledJobExecutionDto,
    void
  >
    verb="POST"
    path={`/api/services/Scheduler/ScheduledJobExecution/Create`}
    {...props}
  />
);

export type UseScheduledJobExecutionCreateProps = Omit<
  UseMutateProps<
    ScheduledJobExecutionDtoAjaxResponse,
    AjaxResponseBase,
    ScheduledJobExecutionCreateQueryParams,
    ScheduledJobExecutionDto,
    void
  >,
  'path' | 'verb'
>;

export const useScheduledJobExecutionCreate = (props: UseScheduledJobExecutionCreateProps) =>
  useMutate<
    ScheduledJobExecutionDtoAjaxResponse,
    AjaxResponseBase,
    ScheduledJobExecutionCreateQueryParams,
    ScheduledJobExecutionDto,
    void
  >('POST', `/api/services/Scheduler/ScheduledJobExecution/Create`, props);

export interface ScheduledJobExecutionUpdateQueryParams {
  /**
   * The requested API version
   */
  'api-version'?: string;
}

export type ScheduledJobExecutionUpdateProps = Omit<
  MutateProps<
    ScheduledJobExecutionDtoAjaxResponse,
    AjaxResponseBase,
    ScheduledJobExecutionUpdateQueryParams,
    ScheduledJobExecutionDto,
    void
  >,
  'path' | 'verb'
>;

export const ScheduledJobExecutionUpdate = (props: ScheduledJobExecutionUpdateProps) => (
  <Mutate<
    ScheduledJobExecutionDtoAjaxResponse,
    AjaxResponseBase,
    ScheduledJobExecutionUpdateQueryParams,
    ScheduledJobExecutionDto,
    void
  >
    verb="PUT"
    path={`/api/services/Scheduler/ScheduledJobExecution/Update`}
    {...props}
  />
);

export type UseScheduledJobExecutionUpdateProps = Omit<
  UseMutateProps<
    ScheduledJobExecutionDtoAjaxResponse,
    AjaxResponseBase,
    ScheduledJobExecutionUpdateQueryParams,
    ScheduledJobExecutionDto,
    void
  >,
  'path' | 'verb'
>;

export const useScheduledJobExecutionUpdate = (props: UseScheduledJobExecutionUpdateProps) =>
  useMutate<
    ScheduledJobExecutionDtoAjaxResponse,
    AjaxResponseBase,
    ScheduledJobExecutionUpdateQueryParams,
    ScheduledJobExecutionDto,
    void
  >('PUT', `/api/services/Scheduler/ScheduledJobExecution/Update`, props);

export interface ScheduledJobExecutionDeleteQueryParams {
  id?: string;
  /**
   * The requested API version
   */
  'api-version'?: string;
}

export type ScheduledJobExecutionDeleteProps = Omit<
  MutateProps<void, unknown, ScheduledJobExecutionDeleteQueryParams, void, void>,
  'path' | 'verb'
>;

export const ScheduledJobExecutionDelete = (props: ScheduledJobExecutionDeleteProps) => (
  <Mutate<void, unknown, ScheduledJobExecutionDeleteQueryParams, void, void>
    verb="DELETE"
    path={`/api/services/Scheduler/ScheduledJobExecution/Delete`}
    {...props}
  />
);

export type UseScheduledJobExecutionDeleteProps = Omit<
  UseMutateProps<void, unknown, ScheduledJobExecutionDeleteQueryParams, void, void>,
  'path' | 'verb'
>;

export const useScheduledJobExecutionDelete = (props: UseScheduledJobExecutionDeleteProps) =>
  useMutate<void, unknown, ScheduledJobExecutionDeleteQueryParams, void, void>(
    'DELETE',
    `/api/services/Scheduler/ScheduledJobExecution/Delete`,
    { ...props }
  );