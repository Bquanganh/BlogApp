import './header.css'

export default function Header(){
    return(
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">Natural and life</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img className="headerImg" src="https://cdnb.artstation.com/p/assets/images/images/031/356/903/medium/adrien-paguet-brunella-landmark-oak-portfolio.jpg?1603377618" alt=""/>
        </div>
    )
}