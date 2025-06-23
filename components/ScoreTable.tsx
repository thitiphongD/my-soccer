"use client";

import { Button } from "./ui/button";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

interface TeamData {
  readonly id: string;
  readonly league: string;
  readonly team: string;
  readonly match_played: number;
  readonly win: number;
  readonly draw: number;
  readonly lose: number;
  readonly goal_for: number;
  readonly goal_against: number;
  readonly goal_difference: number;
  readonly point: number;
  readonly last_update: string;
}

interface ScoreTableProps {
  readonly data: TeamData[];
  readonly title?: string;
}

type FilterType = "all" | "home" | "away";

export default function ScoreTable({ data, title }: ScoreTableProps) {
  const [filter, setFilter] = useState<FilterType>("all");

  // คำนวณข้อมูลตาม filter
  const getFilteredData = (teams: TeamData[]) => {
    return teams.map((team) => {
      if (filter === "all") {
        return team;
      }

      // จำลองการแบ่งแมตช์เหย้า/เยือน (ครึ่งหนึ่งของข้อมูล)
      const homeMatches = Math.round(team.match_played / 2);
      const awayMatches = team.match_played - homeMatches;

      if (filter === "home") {
        const homeWin = Math.round(team.win * 0.6); // สมมติชนะเหย้ามากกว่า
        const homeDraw = Math.round(team.draw * 0.5);
        const homeLose = homeMatches - homeWin - homeDraw;
        const homeGoalFor = Math.round(team.goal_for * 0.55);
        const homeGoalAgainst = Math.round(team.goal_against * 0.45);

        return {
          ...team,
          match_played: homeMatches,
          win: homeWin,
          draw: homeDraw,
          lose: homeLose,
          goal_for: homeGoalFor,
          goal_against: homeGoalAgainst,
          goal_difference: homeGoalFor - homeGoalAgainst,
          point: homeWin * 3 + homeDraw,
        };
      } else {
        // เยือน
        const awayWin = team.win - Math.round(team.win * 0.6);
        const awayDraw = team.draw - Math.round(team.draw * 0.5);
        const awayLose = awayMatches - awayWin - awayDraw;
        const awayGoalFor = team.goal_for - Math.round(team.goal_for * 0.55);
        const awayGoalAgainst =
          team.goal_against - Math.round(team.goal_against * 0.45);

        return {
          ...team,
          match_played: awayMatches,
          win: awayWin,
          draw: awayDraw,
          lose: awayLose,
          goal_for: awayGoalFor,
          goal_against: awayGoalAgainst,
          goal_difference: awayGoalFor - awayGoalAgainst,
          point: awayWin * 3 + awayDraw,
        };
      }
    });
  };

  // เรียงข้อมูลตามคะแนน (จากมากไปน้อย)
  const sortedData = getFilteredData([...data]).sort((a, b) => {
    if (b.point !== a.point) {
      return b.point - a.point;
    }
    // ถ้าคะแนนเท่ากัน เรียงตาม goal difference
    if (b.goal_difference !== a.goal_difference) {
      return b.goal_difference - a.goal_difference;
    }
    // ถ้า goal difference เท่ากัน เรียงตาม goal for
    return b.goal_for - a.goal_for;
  });

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        {title && <h2 className="text-2xl font-bold text-center">{title}</h2>}
        <div className="flex gap-2">
          <Button
            variant={filter === "all" ? "default" : "outline"}
            onClick={() => setFilter("all")}
            size="sm"
          >
            ทั้งหมด
          </Button>
          <Button
            variant={filter === "home" ? "default" : "outline"}
            onClick={() => setFilter("home")}
            size="sm"
          >
            เหย้า
          </Button>
          <Button
            variant={filter === "away" ? "default" : "outline"}
            onClick={() => setFilter("away")}
            size="sm"
          >
            เยือน
          </Button>
        </div>
      </div>
      <div className="rounded-lg border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-16 text-center font-semibold">
                อันดับ
              </TableHead>
              <TableHead className="font-semibold">ทีม</TableHead>
              <TableHead className="w-20 text-center font-semibold">
                แมตช์
              </TableHead>
              <TableHead className="w-16 text-center font-semibold">
                ชนะ
              </TableHead>
              <TableHead className="w-16 text-center font-semibold">
                เสมอ
              </TableHead>
              <TableHead className="w-16 text-center font-semibold">
                แพ้
              </TableHead>
              <TableHead className="w-20 text-center font-semibold">
                ได้
              </TableHead>
              <TableHead className="w-20 text-center font-semibold">
                เสีย
              </TableHead>
              <TableHead className="w-20 text-center font-semibold">
                ต่าง
              </TableHead>
              <TableHead className="w-20 text-center font-semibold">
                คะแนน
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedData.map((team, index) => (
              <TableRow key={team.id}>
                <TableCell className="text-center font-semibold">
                  {index + 1}
                </TableCell>
                <TableCell className="font-medium">{team.team}</TableCell>
                <TableCell className="text-center">
                  {team.match_played}
                </TableCell>
                <TableCell className="text-center">{team.win}</TableCell>
                <TableCell className="text-center">{team.draw}</TableCell>
                <TableCell className="text-center">{team.lose}</TableCell>
                <TableCell className="text-center">{team.goal_for}</TableCell>
                <TableCell className="text-center">
                  {team.goal_against}
                </TableCell>
                <TableCell className="text-center">
                  {team.goal_difference > 0 ? "+" : ""}
                  {team.goal_difference}
                </TableCell>
                <TableCell className="text-center font-bold">
                  {team.point}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
