import { googleLogout, useGoogleLogin } from '@react-oauth/google'
import { useState, useEffect } from 'react'

const Navbar = () => {
    const [ user, setUser ] = useState(null)
    const [ profile, setProfile ] = useState(null)

    useEffect(() => {
        if (user) {
            getProfile()
        }
    }, [user])

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
    })

    const logOut = () => {
        googleLogout()
        setProfile(null)
        setUser(null)
    }

    const getProfile = async () => {
        try {
            const res = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`)
            const data = await res.json()
            setProfile(data)
        } catch {
            console.log("Error when fetching user profile")
        }
    }

    return (
        <div className="flex justify-around py-2 w-full border-b">
            <a className="flex gap-2 items-center text-3xl font-bold" href="/">
                <img className="w-10" src="/logo.png"></img>
                INANUTSEHLL
            </a>
            <div className="flex gap-8 items-center">
                {!profile ? (
                    <button onClick={() => login()} className="flex gap-2 items-center text-sm border p-1.5 px-3 rounded-md" href="/">
                        <img className="w-6" src="/google.png"></img> 
                        Sign in with Google
                    </button>
                ) : (
                    <div className='flex gap-4 items-center'>
                        Logged in as {profile.name}
                        <button onClick={() => logOut()} className="flex gap-2 items-center text-sm border p-1.5 px-3 rounded-md" href="/">
                            Log Out
                        </button>
                    </div>
                )}
                {/*<a className="text-xl hover:underline" href="/">Premium</a>*/}
            </div>
        </div>
    )
}
  
export default Navbar
