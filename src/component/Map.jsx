import { useNavigate, useSearchParams } from 'react-router-dom'
import styles from './Map.module.css'

function Map() {
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams()

    const latitude = searchParams.get("latitude")
    const longitude = searchParams.get("longitude")

    return (
        <div className={styles.mapContainer} onClick={() => {navigate("form")}}>
            Map
            <h4>Position: {latitude}, {longitude}</h4>
            <button onClick={() => {
                setSearchParams({ latitude:23, longitude:41 });
            }}>Change pos</button>
        </div>
    )
}

export default Map
