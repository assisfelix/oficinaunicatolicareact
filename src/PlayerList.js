export default function PlayerList(props){
    return (
        <div>
            <ul>
                {props.players.map((player, index) => (
                    <li key={index}>
                        {player.name} - {player.score}
                    </li>
                ))}
            </ul>
        </div>
    )
}