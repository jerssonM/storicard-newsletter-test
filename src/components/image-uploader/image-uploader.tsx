import { Button, Image } from "@nextui-org/react";
import ImageUploading, { ImageListType } from "react-images-uploading";

interface ImageUploaderProps {
  images: ImageListType;
  onChange?: (imageList: ImageListType) => void;
}

export const ImageUploader = ({
  images,
  onChange = () => {},
}: ImageUploaderProps) => (
  <div>
    <ImageUploading value={images} onChange={onChange} dataURLKey="data_url">
      {({ imageList, onImageUpload, onImageRemove, isDragging, dragProps }) => (
        <div className="upload__image-wrapper">
          <Button
            color="primary"
            style={isDragging ? { color: "red" } : undefined}
            onClick={onImageUpload}
            {...dragProps}
          >
            Click or Drop here
          </Button>
          &nbsp;
          <div className="my-4 flex gap-4 items-center">
            {imageList.map((image, index) => (
              <div key={index} className="text-center w-min">
                <Image
                  src={image["data_url"]}
                  alt={image.file?.name}
                  width={100}
                  height={100}
                />
                <Button
                  size="sm"
                  variant="ghost"
                  color="danger"
                  onClick={() => onImageRemove(index)}
                >
                  Delete
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}
    </ImageUploading>
  </div>
);
