/* eslint-disable @typescript-eslint/no-explicit-any */
import { Editor } from "@tinymce/tinymce-react";

export const EditorMCE = ({
  editorRef,
  value,
  id = "",
}: {
  editorRef: any;
  value: string;
  id?: string
}) => {
  return (
    <Editor
      apiKey={process.env.NEXT_PUBLIC_API_TINYMCE}
      onInit={(_evt, editor) => (editorRef.current = editor)}
      initialValue={value}
      id={id}
      init={{
        plugins: [
          'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
          'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
          'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
        ],
        toolbar: `undo redo | blocks | bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help`,
        images_upload_url: `${process.env.NEXT_PUBLIC_API_URL}/upload/image`,
      }}
    />
  );
};
