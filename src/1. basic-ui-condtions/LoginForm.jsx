import { useState } from "react"

export default function LoginForm() {


    return (
        <>
            <div className="container">
                <div className="mt-3 text-center h3">Login</div>
                <div>
                    <form>
                        <div>
                            <label htmlFor="username" className="form-label">Enter User name</label>
                            <input type="text" name="username" id="username" className="form-control" />
                        </div>

                        <div>
                            <label htmlFor="username" className="form-label">Enter Password</label>
                            <input type="text" name="username" id="username" className="form-control" />
                        </div>
                        <div>
                            <button type="submit" className="mt-3 btn btn-primary">Login</button>
                        </div>

                    </form>
                </div>
            </div>


        </>
    )
}