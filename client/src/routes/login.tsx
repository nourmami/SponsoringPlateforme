import { Button, Container, Input } from '~/ui'
import {
  AiFillLock as LockIcon,
  MdOutlineMailOutline as EmailIcon,
} from '~/core/icons'

export default function Login() {
  return (
    <div>
      <div className="h-[80vh]">
        <Container className="grid grid-cols-1 lg:grid-cols-3 h-full">
          <div className="grid justify-items-center lg:justify-items-start content-center max-w-xl">
            <div className="flex flex-col space-y-3 py-4">
              <h1 className="font-semibold text-xl">Login</h1>
              <Input
                type="text"
                label="Email / Username"
                suffix={<EmailIcon className="text-primary-600" />}
              />
              <Input
                type="password"
                label="Password"
                suffix={<LockIcon className="text-primary-600" />}
              />
              <div>
                <Button variant="primary">Login</Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-evenly">
            <span
              className={`
                    font-semibold relative 
                    after:absolute after:border-b after:lg:border-r after:border-gray-400 
                    after:w-[70vw] after:h-0 after:lg:w-0 after:lg:h-[40vh] after:-z-20
                    after:right-1/2 after:translate-x-1/2 after:top-1/2 after:-translate-y-1/2 
                    before:absolute before:w-[200%] before:h-[200%] before:bg-background before:-z-10
                    before:right-1/2 before:translate-x-1/2 before:top-1/2 before:-translate-y-1/2
                    `}
            >
              OR
            </span>
            <Button href="/register" className="min-w-[320px] text-sm">
              Create an Account
            </Button>
          </div>
          <div className="hidden lg:grid justify-items-end content-center">
            <img src="/art/headphones.svg" alt="" />
          </div>
        </Container>
      </div>
    </div>
  )
}
