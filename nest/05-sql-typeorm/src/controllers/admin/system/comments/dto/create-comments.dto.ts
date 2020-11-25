export class CreateCommentsDto {
    readonly post_id: number;
    readonly author: string;
    readonly time: number;
    readonly content: string;
}