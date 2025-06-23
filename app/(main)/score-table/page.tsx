interface ScoreTable {
    id: string;
    league: string;
    team: string;
    match_played: number;
    win: number;
    draw: number;
    lose: number;
    goal_for: number;
    goal_against: number;
    goal_difference: number;
    point: number;
    last_update: Date;
}

export default function ScoreTable() {
  return <div>ScoreTable</div>;
}