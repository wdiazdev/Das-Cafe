
export default function MenuBanner(props: any) {
    return (
        <div className="menu--banner">
            <h2>{props.title}</h2>
            <p className="text-focus-in">{props.subtitle}</p>
        </div>
    )
}
