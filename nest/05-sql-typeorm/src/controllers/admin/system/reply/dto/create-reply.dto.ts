export class CreateReplyDto {
    readonly last_id: number;
    readonly author: string;
    readonly time: number;
    readonly content: string;
    readonly parent: number;
}