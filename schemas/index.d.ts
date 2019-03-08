/* eslint-disable */

import { AuthorizeRequest } from './Authorize';
import { AuthorizeResponse } from './AuthorizeResponse';
import { BootNotificationRequest } from './BootNotification';
import { BootNotificationResponse } from './BootNotificationResponse';
import { CancelReservationRequest } from './CancelReservation';
import { CancelReservationResponse } from './CancelReservationResponse';
import { ChangeAvailabilityRequest } from './ChangeAvailability';
import { ChangeAvailabilityResponse } from './ChangeAvailabilityResponse';
import { ChangeConfigurationRequest } from './ChangeConfiguration';
import { ChangeConfigurationResponse } from './ChangeConfigurationResponse';
import { ClearCacheRequest } from './ClearCache';
import { ClearCacheResponse } from './ClearCacheResponse';
import { ClearChargingProfileRequest } from './ClearChargingProfile';
import { ClearChargingProfileResponse } from './ClearChargingProfileResponse';
import { DataTransferRequest } from './DataTransfer';
import { DataTransferResponse } from './DataTransferResponse';
import { DiagnosticsStatusNotificationRequest } from './DiagnosticsStatusNotification';
import { DiagnosticsStatusNotificationResponse } from './DiagnosticsStatusNotificationResponse';
import { FirmwareStatusNotificationRequest } from './FirmwareStatusNotification';
import { FirmwareStatusNotificationResponse } from './FirmwareStatusNotificationResponse';
import { GetCompositeScheduleRequest } from './GetCompositeSchedule';
import { GetCompositeScheduleResponse } from './GetCompositeScheduleResponse';
import { GetConfigurationRequest } from './GetConfiguration';
import { GetConfigurationResponse } from './GetConfigurationResponse';
import { GetDiagnosticsRequest } from './GetDiagnostics';
import { GetDiagnosticsResponse } from './GetDiagnosticsResponse';
import { GetLocalListVersionRequest } from './GetLocalListVersion';
import { GetLocalListVersionResponse } from './GetLocalListVersionResponse';
import { HeartbeatRequest } from './Heartbeat';
import { HeartbeatResponse } from './HeartbeatResponse';
import { MeterValuesRequest } from './MeterValues';
import { MeterValuesResponse } from './MeterValuesResponse';
import { RemoteStartTransactionRequest } from './RemoteStartTransaction';
import { RemoteStartTransactionResponse } from './RemoteStartTransactionResponse';
import { RemoteStopTransactionRequest } from './RemoteStopTransaction';
import { RemoteStopTransactionResponse } from './RemoteStopTransactionResponse';
import { ReserveNowRequest } from './ReserveNow';
import { ReserveNowResponse } from './ReserveNowResponse';
import { ResetRequest } from './Reset';
import { ResetResponse } from './ResetResponse';
import { SendLocalListRequest } from './SendLocalList';
import { SendLocalListResponse } from './SendLocalListResponse';
import { SetChargingProfileRequest } from './SetChargingProfile';
import { SetChargingProfileResponse } from './SetChargingProfileResponse';
import { StartTransactionRequest } from './StartTransaction';
import { StartTransactionResponse } from './StartTransactionResponse';
import { StatusNotificationRequest } from './StatusNotification';
import { StatusNotificationResponse } from './StatusNotificationResponse';
import { StopTransactionRequest } from './StopTransaction';
import { StopTransactionResponse } from './StopTransactionResponse';
import { TriggerMessageRequest } from './TriggerMessage';
import { TriggerMessageResponse } from './TriggerMessageResponse';
import { UnlockConnectorRequest } from './UnlockConnector';
import { UnlockConnectorResponse } from './UnlockConnectorResponse';
import { UpdateFirmwareRequest } from './UpdateFirmware';
import { UpdateFirmwareResponse } from './UpdateFirmwareResponse';


export namespace Statuses {
    type StartTransactionResponseStatus = "Accepted" | "Blocked" | "Expired" | "Invalid" | "ConcurrentTx";
    type StopTransactionResponseStatus = "Accepted" | "Blocked" | "Expired" | "Invalid" | "ConcurrentTx";
    type RemoteStartStopTransactionResponseStatus = "Accepted" | "Rejected";
}

export {
    AuthorizeRequest,
    AuthorizeResponse,
    BootNotificationRequest,
    BootNotificationResponse,
    CancelReservationRequest,
    CancelReservationResponse,
    ChangeAvailabilityRequest,
    ChangeAvailabilityResponse,
    ChangeConfigurationRequest,
    ChangeConfigurationResponse,
    ClearCacheRequest,
    ClearCacheResponse,
    ClearChargingProfileRequest,
    ClearChargingProfileResponse,
    DataTransferRequest,
    DataTransferResponse,
    DiagnosticsStatusNotificationRequest,
    DiagnosticsStatusNotificationResponse,
    FirmwareStatusNotificationRequest,
    FirmwareStatusNotificationResponse,
    GetCompositeScheduleRequest,
    GetCompositeScheduleResponse,
    GetConfigurationRequest,
    GetConfigurationResponse,
    GetDiagnosticsRequest,
    GetDiagnosticsResponse,
    GetLocalListVersionRequest,
    GetLocalListVersionResponse,
    HeartbeatRequest,
    HeartbeatResponse,
    MeterValuesRequest,
    MeterValuesResponse,
    RemoteStartTransactionRequest,
    RemoteStartTransactionResponse,
    RemoteStopTransactionRequest,
    RemoteStopTransactionResponse,
    ReserveNowRequest,
    ReserveNowResponse,
    ResetRequest,
    ResetResponse,
    SendLocalListRequest,
    SendLocalListResponse,
    SetChargingProfileRequest,
    SetChargingProfileResponse,
    StartTransactionRequest,
    StartTransactionResponse,
    StatusNotificationRequest,
    StatusNotificationResponse,
    StopTransactionRequest,
    StopTransactionResponse,
    TriggerMessageRequest,
    TriggerMessageResponse,
    UnlockConnectorRequest,
    UnlockConnectorResponse,
    UpdateFirmwareRequest,
    UpdateFirmwareResponse,
}
