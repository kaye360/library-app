import { useAuth } from '../hooks/useAuth'

export default function Avatar() {

    const auth = useAuth()
    
    return (
        <div className='rounded-full w-14 h-14 overflow-hidden'>
            <img src={auth?.user?.user_metadata.avatar_url} className="w-full h-full object-cover" />
        </div>
    )
}
