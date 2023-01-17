import { Button, Input } from '~/ui'
import { AiOutlineUpload as UploadIcon } from '~/core/icons'

export default function UploadPostForm() {
  return (
    <div className="flex flex-col space-y-3 p-4 w-64 sm:w-96">
      <h1 className="font-semibold text-xl">Upload new Post</h1>
      <Input type="textarea" label="Description" />
      <Input
        type="file"
        label="Upload Picture"
        suffix={<UploadIcon className="text-xl" />}
      />
      <div>
        <Button variant="primary">Upload</Button>
      </div>
    </div>
  )
}
