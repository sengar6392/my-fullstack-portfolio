

const AppWrapper = (Component) => function HOC(){
    return(
        <div>
            <div className="app__wrapper app__flex">
                <Component/>
            </div>
        </div>
    )
}

export default AppWrapper