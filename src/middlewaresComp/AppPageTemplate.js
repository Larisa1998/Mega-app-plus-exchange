import Menu from "../Components/Menu/Menu"

const AppPageTemplate = ({users,children}) => {
    return (
        <div className="d-flex flex-row flex-nowrap row">
            <div className="col-2">
                <Menu users={users} />
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center col-10">
                {children}
            </div>
        </div>
    )
}
export default AppPageTemplate