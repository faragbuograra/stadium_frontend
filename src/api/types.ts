// types.ts

export interface ApiResponse {
    data: any[];
    q: string;
    message:any;
    error:any;
   
  }
  export interface ApiResponseGroupPermission {
        id: number;
        name: string;
        username: string;
    price: number;
    room_type: string;
    service_type:string;
    is_available: boolean;

        description: string;
        created_at: string;
        updated_at: string;
  
  
   
  
   
  }
  
  
  export interface FetchOptions extends RequestInit {}
  