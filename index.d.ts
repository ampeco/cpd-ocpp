// Type definitions for ocpp-eliftech 1.0
// Project: https://github.com/elifTech/cpd-ocpp#readme
// Definitions by: Venelin Gornishki <https://github.com/vgorni>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as WebSocket from 'ws';
import { Request } from 'express';
import * as Schemas from './schemas/';

export class OCPPConnector {
    connectorId: number;
    constructor(connectorId: number);
}

export interface OCPPChargePointOptions {
    centralSystemUrl: string;
    reconnectInterval: number;
    connectors: OCPPConnector[];
}

export class ChargePoint {
    constructor(options: OCPPChargePointOptions);

    connect(): Promise<OCPPConnection>;

    send(command: BaseCommand): Promise<boolean>;

    onRequest(command: BaseCommand): Promise<{ status: string; } | void>;
}

export enum MessageType {
    CALL_MESSAGE = 2, // Client-to-Server
    CALLRESULT_MESSAGE = 3, // Server-to-Client
    CALLERROR_MESSAGE = 4, // Server-to-Client
}

export class BaseCommand {
    getCommandName(): string;
}

export class BaseResponse {

}

export class CentralSystemClient {
    connection: OCPPConnection;
}

export class OCPPConnection {
    socket: WebSocket;
    url: string;
    ip: string;

    constructor(socket: WebSocket, req: Request);

    onMessage(message: string): Promise<void>;

    send(command: BaseCommand, messageType: MessageType): Promise<BaseResponse>;

    sendError(messageId: string, err: Error): Promise<BaseResponse>;

    sendMessage(messageId: string, command: BaseCommand, messageType: MessageType): Promise<BaseResponse>;

    onRequest(/*request: */): any;
}

export interface OCPPCentralSystemOptions {
    validateConnection: (url: string) => Promise<boolean>;
    wsOptions: WebSocket.ServerOptions;
}

export class CentralSystem {
    clients: CentralSystemClient[];

    constructor(options: OCPPCentralSystemOptions);

    listen(port?: number | null, host?: string): void;

    onRequest(client: CentralSystemClient, command: BaseCommand): Promise<any>;

    onNewConnection(socket: WebSocket, req: Request): any;
}

export namespace OCPPCommands {
    export class Authorize extends BaseCommand {
        constructor(values: Schemas.AuthorizeRequest);
    }

    export class BootNotification extends BaseCommand {
        constructor(values: Schemas.BootNotificationRequest);

    }

    export class CancelReservation extends BaseCommand {
        constructor(values: Schemas.CancelReservationRequest);
    }

    export class ChangeAvailability extends BaseCommand {
        constructor(values: Schemas.ChangeAvailabilityRequest);
    }

    export class ChangeConfiguration extends BaseCommand {
        constructor(values: Schemas.ChangeConfigurationRequest);
    }

    export class ClearCache extends BaseCommand {
        constructor(values: Schemas.ClearCacheRequest);
    }

    export class ClearChargingProfile extends BaseCommand {
        constructor(values: Schemas.ClearChargingProfileRequest);
    }

    export class DataTransfer extends BaseCommand {
        constructor(values: Schemas.DataTransferRequest);
    }

    export class DiagnosticsStatusNotification extends BaseCommand {
        constructor(values: Schemas.DiagnosticsStatusNotificationRequest);
    }

    export class FirmwareStatusNotification extends BaseCommand {
        constructor(values: Schemas.FirmwareStatusNotificationRequest);
    }

    export class GetCompositeSchedule extends BaseCommand {
        constructor(values: Schemas.GetCompositeScheduleRequest);
    }

    export class GetConfiguration extends BaseCommand {
        constructor(values: Schemas.GetConfigurationRequest);
    }

    export class GetDiagnostics extends BaseCommand {
        constructor(values: Schemas.GetDiagnosticsRequest);
    }

    export class GetLocalListVersion extends BaseCommand {
        constructor(values: Schemas.GetLocalListVersionRequest);
    }

    export class Heartbeat extends BaseCommand {
        constructor(values: Schemas.HeartbeatRequest);
    }

    export class MeterValues extends BaseCommand {
        constructor(values: Schemas.MeterValuesRequest);
    }

    export class RemoteStartTransaction extends BaseCommand {
        constructor(values: Schemas.RemoteStartTransactionRequest);
    }

    export class RemoteStopTransaction extends BaseCommand {
        constructor(values: Schemas.RemoteStopTransactionRequest);
    }

    export class ReserveNow extends BaseCommand {
        constructor(values: Schemas.ReserveNowRequest);
    }

    export class Reset extends BaseCommand {
        constructor(values: Schemas.ResetRequest);
    }

    export class SendLocalList extends BaseCommand {
        constructor(values: Schemas.SendLocalListRequest);
    }

    export class SetChargingProfile extends BaseCommand {
        constructor(values: Schemas.SetChargingProfileRequest);
    }

    export class StartTransaction extends BaseCommand {
        constructor(values: Schemas.StartTransactionRequest);
    }

    export class StatusNotification extends BaseCommand {
        constructor(values: Schemas.StatusNotificationRequest);
    }

    export class StopTransaction extends BaseCommand {
        constructor(values: Schemas.StopTransactionRequest);
    }

    export class TriggerMessage extends BaseCommand {
        constructor(values: Schemas.TriggerMessageRequest);
    }

    export class UnlockConnector extends BaseCommand {
        constructor(values: Schemas.UnlockConnectorRequest);
    }

    export class UpdateFirmware extends BaseCommand {
        constructor(values: Schemas.UpdateFirmwareRequest);
    }
}

