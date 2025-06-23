"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ScoreTable from "@/components/ScoreTable";
import { motion } from "framer-motion";

// Import JSON data
import premierLeagueData from "@/mock-data/score/eng_score.json";
import laLigaData from "@/mock-data/score/spain_score.json";
import serieAData from "@/mock-data/score/italy.json";
import bundesligaData from "@/mock-data/score/ger_score.json";
import ligue1Data from "@/mock-data/score/france_score.json";

export default function ScoreTablePage() {
  const pageVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1] as const,
        staggerChildren: 0.1,
      },
    },
  };

  const titleVariants = {
    hidden: {
      opacity: 0,
      x: -30,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.23, 1, 0.32, 1] as const,
      },
    },
  };

  const tabsVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1] as const,
        delay: 0.2,
      },
    },
  };

  const contentVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.23, 1, 0.32, 1] as const,
      },
    },
  };

  return (
    <motion.div
      className="container mx-auto p-6"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="text-3xl font-bold text-left mb-4 text-primary"
        variants={titleVariants}
      >
        ตารางคะแนนลีกยุโรป
      </motion.h1>

      <motion.div variants={tabsVariants}>
        <Tabs defaultValue="premier-league" className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <TabsList className="grid w-full grid-cols-5 mb-6">
              <TabsTrigger value="premier-league" className="text-sm">
                Premier League
              </TabsTrigger>
              <TabsTrigger value="la-liga" className="text-sm">
                La Liga
              </TabsTrigger>
              <TabsTrigger value="serie-a" className="text-sm">
                Serie A
              </TabsTrigger>
              <TabsTrigger value="bundesliga" className="text-sm">
                Bundesliga
              </TabsTrigger>
              <TabsTrigger value="ligue-1" className="text-sm">
                Ligue 1
              </TabsTrigger>
            </TabsList>
          </motion.div>

          <TabsContent value="premier-league">
            <motion.div variants={contentVariants}>
              <ScoreTable
                data={premierLeagueData}
                title="Premier League 2024/25"
              />
            </motion.div>
          </TabsContent>

          <TabsContent value="la-liga">
            <motion.div variants={contentVariants}>
              <ScoreTable data={laLigaData} title="La Liga 2024/25" />
            </motion.div>
          </TabsContent>

          <TabsContent value="serie-a">
            <motion.div variants={contentVariants}>
              <ScoreTable data={serieAData} title="Serie A 2024/25" />
            </motion.div>
          </TabsContent>

          <TabsContent value="bundesliga">
            <motion.div variants={contentVariants}>
              <ScoreTable data={bundesligaData} title="Bundesliga 2024/25" />
            </motion.div>
          </TabsContent>

          <TabsContent value="ligue-1">
            <motion.div variants={contentVariants}>
              <ScoreTable data={ligue1Data} title="Ligue 1 2024/25" />
            </motion.div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </motion.div>
  );
}
