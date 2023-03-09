/* Generated by restful-react */

import React from 'react';
import { Get, GetProps, useGet, UseGetProps, Mutate, MutateProps, useMutate, UseMutateProps } from 'restful-react';

import * as RestfulShesha from '../utils/fetchers';
export const SPEC_VERSION = 'v1';
export interface AjaxResponseBase {
  targetUrl?: string | null;
  success?: boolean;
  error?: ErrorInfo;
  unAuthorizedRequest?: boolean;
  __abp?: boolean;
}

/**
 * Generic DTO of the simple autocomplete item
 */
export interface AutocompleteItemDto {
  value?: string | null;
  displayText?: string | null;
}

export interface AutocompleteItemDtoListAjaxResponse {
  targetUrl?: string | null;
  success?: boolean;
  error?: ErrorInfo;
  unAuthorizedRequest?: boolean;
  __abp?: boolean;
  result?: AutocompleteItemDto[] | null;
}

/**
 * Status of the Shesha.Domain.ConfigurationItems.ConfigurationItem
 */
export type ConfigurationItemVersionStatus = 1 | 2 | 3 | 4 | 5;

/**
 * Entity config DTO
 */
export interface EntityConfigDto {
  id?: string;
  friendlyName?: string | null;
  typeShortAlias?: string | null;
  tableName?: string | null;
  className?: string | null;
  namespace?: string | null;
  discriminatorValue?: string | null;
  source?: MetadataSourceType;
  entityConfigType?: EntityConfigTypes;
  generateAppService?: boolean;
  suppress?: boolean;
  module?: string | null;
  name?: string | null;
  label?: string | null;
  notImplemented?: boolean;
  moduleId?: string | null;
  description?: string | null;
  versionNo?: number;
  versionStatus?: ConfigurationItemVersionStatus;
}

export interface EntityConfigDtoAjaxResponse {
  targetUrl?: string | null;
  success?: boolean;
  error?: ErrorInfo;
  unAuthorizedRequest?: boolean;
  __abp?: boolean;
  result?: EntityConfigDto;
}

export interface EntityConfigDtoPagedResultDto {
  items?: EntityConfigDto[] | null;
  totalCount?: number;
}

export interface EntityConfigDtoPagedResultDtoAjaxResponse {
  targetUrl?: string | null;
  success?: boolean;
  error?: ErrorInfo;
  unAuthorizedRequest?: boolean;
  __abp?: boolean;
  result?: EntityConfigDtoPagedResultDto;
}

export interface EntityConfigGraphQLDataResult {
  configuration?: string | null;
  generateAppService?: boolean | null;
  typeShortAlias?: string;
  itemType?: string;
  source?: number | null;
  tableName?: string;
  discriminatorValue?: string;
  friendlyName?: string;
  propertiesMD5?: string;
  namespace?: string;
  parent?: string | null;
  entityConfigType?: number | null;
  fullClassName?: string;
  className?: string;
  _className?: string;
  _jObject?: {
    [key: string]: JToken;
  };
  id?: string;
}

export interface EntityConfigGraphQLDataResultAjaxResponse {
  targetUrl?: string | null;
  success?: boolean;
  error?: ErrorInfo;
  unAuthorizedRequest?: boolean;
  __abp?: boolean;
  result?: EntityConfigGraphQLDataResult;
}

/**
 * NOTE: shape of the response depends on the `properties` argument
 */
export interface EntityConfigPagedResultDtoGraphQLDataResult {
  totalCount?: number;
  items?: ProxyDynamicDtoEntityConfigGuid[];
}

export interface EntityConfigPagedResultDtoGraphQLDataResultAjaxResponse {
  targetUrl?: string | null;
  success?: boolean;
  error?: ErrorInfo;
  unAuthorizedRequest?: boolean;
  __abp?: boolean;
  result?: EntityConfigPagedResultDtoGraphQLDataResult;
}

/**
 * Indicate the type of the entity metadata
 */
export type EntityConfigTypes = 1 | 2;

export interface ErrorInfo {
  code?: number;
  message?: string | null;
  details?: string | null;
  validationErrors?: ValidationErrorInfo[] | null;
}

export interface FormIdFullNameDto {
  name?: string | null;
  module?: string | null;
}

export interface FormIdFullNameDtoAjaxResponse {
  targetUrl?: string | null;
  success?: boolean;
  error?: ErrorInfo;
  unAuthorizedRequest?: boolean;
  __abp?: boolean;
  result?: FormIdFullNameDto;
}

export type JToken = JToken[];

/**
 * Indicate the source of the entity/property metadata
 */
export type MetadataSourceType = 1 | 2;

export interface ProxyDynamicDtoEntityConfigGuid {
  id?: string;
  _jObject?: {
    [key: string]: JToken;
  } | null;
  configuration?: string | null;
  generateAppService?: boolean | null;
  typeShortAlias?: string | null;
  itemType?: string | null;
  source?: number | null;
  tableName?: string | null;
  discriminatorValue?: string | null;
  friendlyName?: string | null;
  propertiesMD5?: string | null;
  namespace?: string | null;
  parent?: string | null;
  entityConfigType?: number | null;
  fullClassName?: string | null;
  className?: string | null;
  _className?: string | null;
}

export interface ValidationErrorInfo {
  message?: string | null;
  members?: string[] | null;
}

export interface EntityConfigGetEntityConfigFormQueryParams {
  entityConfigName?: string;
  typeName?: string;
  /**
   * The requested API version
   */
  'api-version'?: string;
}

export type EntityConfigGetEntityConfigFormProps = Omit<
  GetProps<FormIdFullNameDtoAjaxResponse, AjaxResponseBase, EntityConfigGetEntityConfigFormQueryParams, void>,
  'path'
>;

export const EntityConfigGetEntityConfigForm = (props: EntityConfigGetEntityConfigFormProps) => (
  <Get<FormIdFullNameDtoAjaxResponse, AjaxResponseBase, EntityConfigGetEntityConfigFormQueryParams, void>
    path={`/api/services/app/EntityConfig/GetEntityConfigForm`}
    {...props}
  />
);

export type UseEntityConfigGetEntityConfigFormProps = Omit<
  UseGetProps<FormIdFullNameDtoAjaxResponse, AjaxResponseBase, EntityConfigGetEntityConfigFormQueryParams, void>,
  'path'
>;

export const useEntityConfigGetEntityConfigForm = (props: UseEntityConfigGetEntityConfigFormProps) =>
  useGet<FormIdFullNameDtoAjaxResponse, AjaxResponseBase, EntityConfigGetEntityConfigFormQueryParams, void>(
    `/api/services/app/EntityConfig/GetEntityConfigForm`,
    props
  );

export type entityConfigGetEntityConfigFormProps = Omit<
  RestfulShesha.GetProps<
    FormIdFullNameDtoAjaxResponse,
    AjaxResponseBase,
    EntityConfigGetEntityConfigFormQueryParams,
    void
  >,
  'queryParams'
>;
export const entityConfigGetEntityConfigForm = (
  queryParams: EntityConfigGetEntityConfigFormQueryParams,
  props: entityConfigGetEntityConfigFormProps
) =>
  RestfulShesha.get<FormIdFullNameDtoAjaxResponse, AjaxResponseBase, EntityConfigGetEntityConfigFormQueryParams, void>(
    `/api/services/app/EntityConfig/GetEntityConfigForm`,
    queryParams,
    props
  );

export interface EntityConfigGetMainDataListQueryParams {
  /**
   * Filter string in JsonLogic format
   */
  filter?: string;
  /**
   * Quick search string. Is used to search entities by text
   */
  quickSearch?: string;
  /**
   * List of specifications to apply on top of query
   */
  specifications?: string[];
  sorting?: string;
  skipCount?: number;
  maxResultCount?: number;
  /**
   * The requested API version
   */
  'api-version'?: string;
}

export type EntityConfigGetMainDataListProps = Omit<
  GetProps<EntityConfigDtoPagedResultDtoAjaxResponse, AjaxResponseBase, EntityConfigGetMainDataListQueryParams, void>,
  'path'
>;

export const EntityConfigGetMainDataList = (props: EntityConfigGetMainDataListProps) => (
  <Get<EntityConfigDtoPagedResultDtoAjaxResponse, AjaxResponseBase, EntityConfigGetMainDataListQueryParams, void>
    path={`/api/services/app/EntityConfig/GetMainDataList`}
    {...props}
  />
);

export type UseEntityConfigGetMainDataListProps = Omit<
  UseGetProps<
    EntityConfigDtoPagedResultDtoAjaxResponse,
    AjaxResponseBase,
    EntityConfigGetMainDataListQueryParams,
    void
  >,
  'path'
>;

export const useEntityConfigGetMainDataList = (props: UseEntityConfigGetMainDataListProps) =>
  useGet<EntityConfigDtoPagedResultDtoAjaxResponse, AjaxResponseBase, EntityConfigGetMainDataListQueryParams, void>(
    `/api/services/app/EntityConfig/GetMainDataList`,
    props
  );

export type entityConfigGetMainDataListProps = Omit<
  RestfulShesha.GetProps<
    EntityConfigDtoPagedResultDtoAjaxResponse,
    AjaxResponseBase,
    EntityConfigGetMainDataListQueryParams,
    void
  >,
  'queryParams'
>;
export const entityConfigGetMainDataList = (
  queryParams: EntityConfigGetMainDataListQueryParams,
  props: entityConfigGetMainDataListProps
) =>
  RestfulShesha.get<
    EntityConfigDtoPagedResultDtoAjaxResponse,
    AjaxResponseBase,
    EntityConfigGetMainDataListQueryParams,
    void
  >(`/api/services/app/EntityConfig/GetMainDataList`, queryParams, props);

export interface EntityConfigEntityConfigAutocompleteQueryParams {
  implemented?: boolean;
  term?: string;
  selectedValue?: string;
  /**
   * The requested API version
   */
  'api-version'?: string;
}

export type EntityConfigEntityConfigAutocompleteProps = Omit<
  GetProps<
    AutocompleteItemDtoListAjaxResponse,
    AjaxResponseBase,
    EntityConfigEntityConfigAutocompleteQueryParams,
    void
  >,
  'path'
>;

export const EntityConfigEntityConfigAutocomplete = (props: EntityConfigEntityConfigAutocompleteProps) => (
  <Get<AutocompleteItemDtoListAjaxResponse, AjaxResponseBase, EntityConfigEntityConfigAutocompleteQueryParams, void>
    path={`/api/services/app/EntityConfig/EntityConfigAutocomplete`}
    {...props}
  />
);

export type UseEntityConfigEntityConfigAutocompleteProps = Omit<
  UseGetProps<
    AutocompleteItemDtoListAjaxResponse,
    AjaxResponseBase,
    EntityConfigEntityConfigAutocompleteQueryParams,
    void
  >,
  'path'
>;

export const useEntityConfigEntityConfigAutocomplete = (props: UseEntityConfigEntityConfigAutocompleteProps) =>
  useGet<AutocompleteItemDtoListAjaxResponse, AjaxResponseBase, EntityConfigEntityConfigAutocompleteQueryParams, void>(
    `/api/services/app/EntityConfig/EntityConfigAutocomplete`,
    props
  );

export type entityConfigEntityConfigAutocompleteProps = Omit<
  RestfulShesha.GetProps<
    AutocompleteItemDtoListAjaxResponse,
    AjaxResponseBase,
    EntityConfigEntityConfigAutocompleteQueryParams,
    void
  >,
  'queryParams'
>;
export const entityConfigEntityConfigAutocomplete = (
  queryParams: EntityConfigEntityConfigAutocompleteQueryParams,
  props: entityConfigEntityConfigAutocompleteProps
) =>
  RestfulShesha.get<
    AutocompleteItemDtoListAjaxResponse,
    AjaxResponseBase,
    EntityConfigEntityConfigAutocompleteQueryParams,
    void
  >(`/api/services/app/EntityConfig/EntityConfigAutocomplete`, queryParams, props);

export interface EntityConfigDeleteQueryParams {
  id?: string;
  /**
   * The requested API version
   */
  'api-version'?: string;
}

export type EntityConfigDeleteProps = Omit<
  MutateProps<void, unknown, EntityConfigDeleteQueryParams, void, void>,
  'path' | 'verb'
>;

export const EntityConfigDelete = (props: EntityConfigDeleteProps) => (
  <Mutate<void, unknown, EntityConfigDeleteQueryParams, void, void>
    verb="DELETE"
    path={`/api/services/app/EntityConfig/Delete`}
    {...props}
  />
);

export type UseEntityConfigDeleteProps = Omit<
  UseMutateProps<void, unknown, EntityConfigDeleteQueryParams, void, void>,
  'path' | 'verb'
>;

export const useEntityConfigDelete = (props: UseEntityConfigDeleteProps) =>
  useMutate<void, unknown, EntityConfigDeleteQueryParams, void, void>(
    'DELETE',
    `/api/services/app/EntityConfig/Delete`,
    { ...props }
  );

export type entityConfigDeleteProps = Omit<
  RestfulShesha.MutateProps<void, unknown, EntityConfigDeleteQueryParams, void, void>,
  'data'
>;
export const entityConfigDelete = (props: entityConfigDeleteProps) =>
  RestfulShesha.mutate<void, unknown, EntityConfigDeleteQueryParams, void, void>(
    'DELETE',
    `/api/services/app/EntityConfig/Delete`,
    undefined,
    props
  );

export interface EntityConfigRemoveConfigurationsOfMissingClassesQueryParams {
  /**
   * The requested API version
   */
  'api-version'?: string;
}

export type EntityConfigRemoveConfigurationsOfMissingClassesProps = Omit<
  MutateProps<void, unknown, EntityConfigRemoveConfigurationsOfMissingClassesQueryParams, void, void>,
  'path' | 'verb'
>;

export const EntityConfigRemoveConfigurationsOfMissingClasses = (
  props: EntityConfigRemoveConfigurationsOfMissingClassesProps
) => (
  <Mutate<void, unknown, EntityConfigRemoveConfigurationsOfMissingClassesQueryParams, void, void>
    verb="DELETE"
    path={`/api/services/app/EntityConfig/RemoveConfigurationsOfMissingClasses`}
    {...props}
  />
);

export type UseEntityConfigRemoveConfigurationsOfMissingClassesProps = Omit<
  UseMutateProps<void, unknown, EntityConfigRemoveConfigurationsOfMissingClassesQueryParams, void, void>,
  'path' | 'verb'
>;

export const useEntityConfigRemoveConfigurationsOfMissingClasses = (
  props: UseEntityConfigRemoveConfigurationsOfMissingClassesProps
) =>
  useMutate<void, unknown, EntityConfigRemoveConfigurationsOfMissingClassesQueryParams, void, void>(
    'DELETE',
    `/api/services/app/EntityConfig/RemoveConfigurationsOfMissingClasses`,
    { ...props }
  );

export type entityConfigRemoveConfigurationsOfMissingClassesProps = Omit<
  RestfulShesha.MutateProps<void, unknown, EntityConfigRemoveConfigurationsOfMissingClassesQueryParams, void, void>,
  'data'
>;
export const entityConfigRemoveConfigurationsOfMissingClasses = (
  props: entityConfigRemoveConfigurationsOfMissingClassesProps
) =>
  RestfulShesha.mutate<void, unknown, EntityConfigRemoveConfigurationsOfMissingClassesQueryParams, void, void>(
    'DELETE',
    `/api/services/app/EntityConfig/RemoveConfigurationsOfMissingClasses`,
    undefined,
    props
  );

export interface EntityConfigCreateQueryParams {
  /**
   * The requested API version
   */
  'api-version'?: string;
}

export type EntityConfigCreateProps = Omit<
  MutateProps<EntityConfigDtoAjaxResponse, AjaxResponseBase, EntityConfigCreateQueryParams, EntityConfigDto, void>,
  'path' | 'verb'
>;

export const EntityConfigCreate = (props: EntityConfigCreateProps) => (
  <Mutate<EntityConfigDtoAjaxResponse, AjaxResponseBase, EntityConfigCreateQueryParams, EntityConfigDto, void>
    verb="POST"
    path={`/api/services/app/EntityConfig/Create`}
    {...props}
  />
);

export type UseEntityConfigCreateProps = Omit<
  UseMutateProps<EntityConfigDtoAjaxResponse, AjaxResponseBase, EntityConfigCreateQueryParams, EntityConfigDto, void>,
  'path' | 'verb'
>;

export const useEntityConfigCreate = (props: UseEntityConfigCreateProps) =>
  useMutate<EntityConfigDtoAjaxResponse, AjaxResponseBase, EntityConfigCreateQueryParams, EntityConfigDto, void>(
    'POST',
    `/api/services/app/EntityConfig/Create`,
    props
  );

export type entityConfigCreateProps = Omit<
  RestfulShesha.MutateProps<
    EntityConfigDtoAjaxResponse,
    AjaxResponseBase,
    EntityConfigCreateQueryParams,
    EntityConfigDto,
    void
  >,
  'data'
>;
export const entityConfigCreate = (data: EntityConfigDto, props: entityConfigCreateProps) =>
  RestfulShesha.mutate<
    EntityConfigDtoAjaxResponse,
    AjaxResponseBase,
    EntityConfigCreateQueryParams,
    EntityConfigDto,
    void
  >('POST', `/api/services/app/EntityConfig/Create`, data, props);

export interface EntityConfigGetQueryParams {
  id?: string;
  /**
   * The requested API version
   */
  'api-version'?: string;
}

export type EntityConfigGetProps = Omit<
  GetProps<EntityConfigDtoAjaxResponse, AjaxResponseBase, EntityConfigGetQueryParams, void>,
  'path'
>;

export const EntityConfigGet = (props: EntityConfigGetProps) => (
  <Get<EntityConfigDtoAjaxResponse, AjaxResponseBase, EntityConfigGetQueryParams, void>
    path={`/api/services/app/EntityConfig/Get`}
    {...props}
  />
);

export type UseEntityConfigGetProps = Omit<
  UseGetProps<EntityConfigDtoAjaxResponse, AjaxResponseBase, EntityConfigGetQueryParams, void>,
  'path'
>;

export const useEntityConfigGet = (props: UseEntityConfigGetProps) =>
  useGet<EntityConfigDtoAjaxResponse, AjaxResponseBase, EntityConfigGetQueryParams, void>(
    `/api/services/app/EntityConfig/Get`,
    props
  );

export type entityConfigGetProps = Omit<
  RestfulShesha.GetProps<EntityConfigDtoAjaxResponse, AjaxResponseBase, EntityConfigGetQueryParams, void>,
  'queryParams'
>;
export const entityConfigGet = (queryParams: EntityConfigGetQueryParams, props: entityConfigGetProps) =>
  RestfulShesha.get<EntityConfigDtoAjaxResponse, AjaxResponseBase, EntityConfigGetQueryParams, void>(
    `/api/services/app/EntityConfig/Get`,
    queryParams,
    props
  );

export interface EntityConfigUpdateQueryParams {
  /**
   * The requested API version
   */
  'api-version'?: string;
}

export type EntityConfigUpdateProps = Omit<
  MutateProps<EntityConfigDtoAjaxResponse, AjaxResponseBase, EntityConfigUpdateQueryParams, EntityConfigDto, void>,
  'path' | 'verb'
>;

export const EntityConfigUpdate = (props: EntityConfigUpdateProps) => (
  <Mutate<EntityConfigDtoAjaxResponse, AjaxResponseBase, EntityConfigUpdateQueryParams, EntityConfigDto, void>
    verb="PUT"
    path={`/api/services/app/EntityConfig/Update`}
    {...props}
  />
);

export type UseEntityConfigUpdateProps = Omit<
  UseMutateProps<EntityConfigDtoAjaxResponse, AjaxResponseBase, EntityConfigUpdateQueryParams, EntityConfigDto, void>,
  'path' | 'verb'
>;

export const useEntityConfigUpdate = (props: UseEntityConfigUpdateProps) =>
  useMutate<EntityConfigDtoAjaxResponse, AjaxResponseBase, EntityConfigUpdateQueryParams, EntityConfigDto, void>(
    'PUT',
    `/api/services/app/EntityConfig/Update`,
    props
  );

export type entityConfigUpdateProps = Omit<
  RestfulShesha.MutateProps<
    EntityConfigDtoAjaxResponse,
    AjaxResponseBase,
    EntityConfigUpdateQueryParams,
    EntityConfigDto,
    void
  >,
  'data'
>;
export const entityConfigUpdate = (data: EntityConfigDto, props: entityConfigUpdateProps) =>
  RestfulShesha.mutate<
    EntityConfigDtoAjaxResponse,
    AjaxResponseBase,
    EntityConfigUpdateQueryParams,
    EntityConfigDto,
    void
  >('PUT', `/api/services/app/EntityConfig/Update`, data, props);

export interface EntityConfigGetAllQueryParams {
  /**
   * Filter string in JsonLogic format
   */
  filter?: string;
  /**
   * Quick search string. Is used to search entities by text
   */
  quickSearch?: string;
  /**
   * List of specifications to apply on top of query
   */
  specifications?: string[];
  sorting?: string;
  skipCount?: number;
  maxResultCount?: number;
  /**
   * The requested API version
   */
  'api-version'?: string;
}

export type EntityConfigGetAllProps = Omit<
  GetProps<EntityConfigDtoPagedResultDtoAjaxResponse, AjaxResponseBase, EntityConfigGetAllQueryParams, void>,
  'path'
>;

export const EntityConfigGetAll = (props: EntityConfigGetAllProps) => (
  <Get<EntityConfigDtoPagedResultDtoAjaxResponse, AjaxResponseBase, EntityConfigGetAllQueryParams, void>
    path={`/api/services/app/EntityConfig/GetAll`}
    {...props}
  />
);

export type UseEntityConfigGetAllProps = Omit<
  UseGetProps<EntityConfigDtoPagedResultDtoAjaxResponse, AjaxResponseBase, EntityConfigGetAllQueryParams, void>,
  'path'
>;

export const useEntityConfigGetAll = (props: UseEntityConfigGetAllProps) =>
  useGet<EntityConfigDtoPagedResultDtoAjaxResponse, AjaxResponseBase, EntityConfigGetAllQueryParams, void>(
    `/api/services/app/EntityConfig/GetAll`,
    props
  );

export type entityConfigGetAllProps = Omit<
  RestfulShesha.GetProps<
    EntityConfigDtoPagedResultDtoAjaxResponse,
    AjaxResponseBase,
    EntityConfigGetAllQueryParams,
    void
  >,
  'queryParams'
>;
export const entityConfigGetAll = (queryParams: EntityConfigGetAllQueryParams, props: entityConfigGetAllProps) =>
  RestfulShesha.get<EntityConfigDtoPagedResultDtoAjaxResponse, AjaxResponseBase, EntityConfigGetAllQueryParams, void>(
    `/api/services/app/EntityConfig/GetAll`,
    queryParams,
    props
  );

export interface EntityConfigQueryQueryParams {
  /**
   * List of properties to fetch in GraphQL-like syntax. Supports nested properties
   */
  properties?: string;
  id?: string;
  /**
   * The requested API version
   */
  'api-version'?: string;
}

export type EntityConfigQueryProps = Omit<
  GetProps<EntityConfigGraphQLDataResultAjaxResponse, AjaxResponseBase, EntityConfigQueryQueryParams, void>,
  'path'
>;

/**
 * Query entity data.
 * NOTE: don't use on prod, will be merged with the `Get`endpoint soon
 */
export const EntityConfigQuery = (props: EntityConfigQueryProps) => (
  <Get<EntityConfigGraphQLDataResultAjaxResponse, AjaxResponseBase, EntityConfigQueryQueryParams, void>
    path={`/api/services/app/EntityConfig/Query`}
    {...props}
  />
);

export type UseEntityConfigQueryProps = Omit<
  UseGetProps<EntityConfigGraphQLDataResultAjaxResponse, AjaxResponseBase, EntityConfigQueryQueryParams, void>,
  'path'
>;

/**
 * Query entity data.
 * NOTE: don't use on prod, will be merged with the `Get`endpoint soon
 */
export const useEntityConfigQuery = (props: UseEntityConfigQueryProps) =>
  useGet<EntityConfigGraphQLDataResultAjaxResponse, AjaxResponseBase, EntityConfigQueryQueryParams, void>(
    `/api/services/app/EntityConfig/Query`,
    props
  );

export type entityConfigQueryProps = Omit<
  RestfulShesha.GetProps<
    EntityConfigGraphQLDataResultAjaxResponse,
    AjaxResponseBase,
    EntityConfigQueryQueryParams,
    void
  >,
  'queryParams'
>;
/**
 * Query entity data.
 * NOTE: don't use on prod, will be merged with the `Get`endpoint soon
 */
export const entityConfigQuery = (queryParams: EntityConfigQueryQueryParams, props: entityConfigQueryProps) =>
  RestfulShesha.get<EntityConfigGraphQLDataResultAjaxResponse, AjaxResponseBase, EntityConfigQueryQueryParams, void>(
    `/api/services/app/EntityConfig/Query`,
    queryParams,
    props
  );

export interface EntityConfigQueryAllQueryParams {
  /**
   * List of properties to fetch in GraphQL-like syntax. Supports nested properties
   */
  properties?: string;
  /**
   * Filter string in JsonLogic format
   */
  filter?: string;
  /**
   * Quick search string. Is used to search entities by text
   */
  quickSearch?: string;
  /**
   * List of specifications to apply on top of query
   */
  specifications?: string[];
  sorting?: string;
  skipCount?: number;
  maxResultCount?: number;
  /**
   * The requested API version
   */
  'api-version'?: string;
}

export type EntityConfigQueryAllProps = Omit<
  GetProps<
    EntityConfigPagedResultDtoGraphQLDataResultAjaxResponse,
    AjaxResponseBase,
    EntityConfigQueryAllQueryParams,
    void
  >,
  'path'
>;

/**
 * Query entities list
 * NOTE: don't use on prod, will be merged with the GetAll endpoint soon
 */
export const EntityConfigQueryAll = (props: EntityConfigQueryAllProps) => (
  <Get<EntityConfigPagedResultDtoGraphQLDataResultAjaxResponse, AjaxResponseBase, EntityConfigQueryAllQueryParams, void>
    path={`/api/services/app/EntityConfig/QueryAll`}
    {...props}
  />
);

export type UseEntityConfigQueryAllProps = Omit<
  UseGetProps<
    EntityConfigPagedResultDtoGraphQLDataResultAjaxResponse,
    AjaxResponseBase,
    EntityConfigQueryAllQueryParams,
    void
  >,
  'path'
>;

/**
 * Query entities list
 * NOTE: don't use on prod, will be merged with the GetAll endpoint soon
 */
export const useEntityConfigQueryAll = (props: UseEntityConfigQueryAllProps) =>
  useGet<
    EntityConfigPagedResultDtoGraphQLDataResultAjaxResponse,
    AjaxResponseBase,
    EntityConfigQueryAllQueryParams,
    void
  >(`/api/services/app/EntityConfig/QueryAll`, props);

export type entityConfigQueryAllProps = Omit<
  RestfulShesha.GetProps<
    EntityConfigPagedResultDtoGraphQLDataResultAjaxResponse,
    AjaxResponseBase,
    EntityConfigQueryAllQueryParams,
    void
  >,
  'queryParams'
>;
/**
 * Query entities list
 * NOTE: don't use on prod, will be merged with the GetAll endpoint soon
 */
export const entityConfigQueryAll = (queryParams: EntityConfigQueryAllQueryParams, props: entityConfigQueryAllProps) =>
  RestfulShesha.get<
    EntityConfigPagedResultDtoGraphQLDataResultAjaxResponse,
    AjaxResponseBase,
    EntityConfigQueryAllQueryParams,
    void
  >(`/api/services/app/EntityConfig/QueryAll`, queryParams, props);