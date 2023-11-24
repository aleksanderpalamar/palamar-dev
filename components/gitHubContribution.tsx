"use client";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LoaderIcon } from "lucide-react";
import { formatText } from "@/utils/formatText";
import { ScrollArea } from "./ui/scroll-area";

interface GitHubContributionProps {
  username: string;
}

type dataProps = {
  repo: {
    name: string;
    url: string;
  };
  created_at: string;
  id: number;
  payload: {
    commits: [
      {
        message: string;
      }
    ];
  };
};

export const GitHubContribution = ({ username }: GitHubContributionProps) => {
  const [contributionData, setContributionData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://api.github.com/users/${username}/events`
        );
        if (res.status === 200) {
          setContributionData(res.data);
          setLoading(false);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [username]);

  return (
    <div>
      {loading ? (
        <LoaderIcon className="w-8 h-8 animate-spin text-gray-500 dark:text-gray-50" />
      ) : (
        <div>
          {contributionData.map((data: dataProps) => (
            <>
              <div className="flex items-center justify-between hover:bg-violet-500/10 rounded">
              <p
                key={data.id}
                className="flex flex-col text-xs text-sky-500 items-center"
              >
                <Link href={data.repo.url} className="ml-1">
                  {formatText(data.repo.name.toString(), 4)}
                </Link>
              </p>
              <span className="ml-2 self-end flex p-1">
                {data.payload.commits ? (
                  <>
                    {data.payload.commits.map((commit, index) => (
                      <span
                        key={index}
                        className="truncate break-words text-xs"
                      >
                        {formatText(commit.message, 5)}
                      </span>
                    ))}
                  </>
                ) : (
                  <>
                    <span className="truncate break-words text-xs">No commits.</span>
                  </>
                )}
              </span>
            </div>
            </>
          ))}
        </div>
      )}
    </div>
  );
};
