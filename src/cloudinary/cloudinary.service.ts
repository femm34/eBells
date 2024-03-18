import { Injectable } from '@nestjs/common';
import { UploadApiErrorResponse, UploadApiResponse, v2 } from 'cloudinary';
import toStream = require('buffer-to-stream');

@Injectable()
export class CloudinaryService {
  async uploadImage(
    file: Express.Multer.File,
    folderName: string,
    width: number,
    height: number,
    cropMode: string = "fill",
    quality: number = 80
  ): Promise<UploadApiResponse | UploadApiErrorResponse> {
    return new Promise((resolve, reject) => {
      const upload = v2.uploader.upload_stream(
        {
          folder: folderName,
          width: width,
          height: height,
          crop: cropMode,
          quality: quality,
        },
        (error, result) => {
          if (error) return reject(error);
          resolve(result);
        }
      );

      toStream(file.buffer).pipe(upload);
    });
  }
  async deleteImage(publicId: string): Promise<any> {
    return new Promise((resolve, reject) => {
      v2.uploader.destroy(publicId, (error, result) => {
        if (error) return reject(error);
        resolve(result);
      });
    });
  }

  async updateImage(
    publicId: string,
    file: Express.Multer.File,
    folderName: string,
    width: number,
    height: number,
    cropMode: string = "fill",
    quality: number = 80
  ): Promise<UploadApiResponse | UploadApiErrorResponse> {
    return new Promise((resolve, reject) => {
      const upload = v2.uploader.upload_stream(
        {
          public_id: publicId,
          folder: folderName,
          width: width,
          height: height,
          crop: cropMode,
          quality: quality,
        },
        (error, result) => {
          if (error) return reject(error);
          resolve(result);
        }
      );

      toStream(file.buffer).pipe(upload);
    });
  }

}
