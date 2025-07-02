import styles from './header.module.css'
import logo from '../../assets/jc_logo_v2.svg'
import crown from '../../assets/crown.svg'
import searchicon from '../../assets/ic_search.svg'
import mic from '../../assets/voice-search.svg'
import avatar from '../../assets/avatar_guest.svg'

const Header = () => {

    let navlinks = ['Home', 'Sports', 'Movies', 'TV Shows', 'More']


    return (



        <>

            <header className={styles.header}>
                <nav className={styles.navigation}>

                    <div className={styles.logo}>
                        <img src={logo} alt='logo'/>
                        <div className={styles.premium}>
                            <img src={crown} alt='image'/>
                            <p>Go Premium</p>     
                        </div>
                    </div>

                    <ul className={styles.navlinks}>

                        {navlinks.map((link)=>{
                            return <li className={styles.navlink}>{link}</li>
                        })}

                    </ul>

                </nav>

                <div className={styles.search}>

                    <div className={styles.searchbox}>
                        <div className={styles.headericon}>
                            <img src={searchicon} alt='image'/>
                        </div>

                        <input className={styles.searchinput} type="text" placeholder='Movies, Shows and more'/>

                        <div className={styles.headericon}>
                            <img  src={mic} alt='image'/>
                        </div>

                    </div>

                    <img className={styles.usericon} src={avatar} alt='image'/>

                </div>
            </header>

        </>

    )

}

export default Header