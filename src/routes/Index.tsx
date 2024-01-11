import { signIn } from "../lib/auth";
import { useAuth } from "../hooks/useAuth";
import HomeLayout from "../layout/HomeLayout";


export default function Index() {

    const auth = useAuth()

    return (
        <HomeLayout>

            <h1>Home</h1>

            { auth?.session ? (
                <p>
                    Welcome back, {auth.user?.email}
                </p>
            ) : (
                <button
                    onClick={ signIn }
                    className='block w-full max-w-56 px-6 py-3 border border-red-300 hover:bg-red-400'
                >
                    Sign In
                </button>
            )}

        </HomeLayout>
    )
}