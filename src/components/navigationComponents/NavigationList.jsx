import NavigationLinks from "./NavigationLinks";

const NavigationList = function({routes}){

    const links = routes.map((linkObject)=>{
        return (
            <NavigationLinks key={routes.indexOf(linkObject)} linkObject={linkObject} />
        )

    })



    

    return (
        <>
        <ul className="navigation-list">
            {links}
        </ul>
        <hr />
        </>
    )
};

export default NavigationList