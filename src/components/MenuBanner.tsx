
export default function MenuBanner(props: any) {
    return (
        <div className="menu--banner">
            <h2>{props.title}</h2>
            <p>{props.subtitle}</p>
        </div>
    )
}
