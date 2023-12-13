export class ResponseDto<T> {
  success: boolean;
  message: string;
  data?: T;
  errors?: T;
}

export class SimpleResponseDto {
  success: boolean;
  message: string;
}
