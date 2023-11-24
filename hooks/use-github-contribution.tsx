import { useEffect, useState } from "react"
import axios from "axios"

type useGitHubContributionProps = {
  username: string
}

const useGitHubContribution = ({ username }: useGitHubContributionProps ) => {
  const [contributionsData, setContributionsData] = useState([])
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://api.github.com/users/${username}/events`)
        switch (res.status === 200) {
          case true:
            setContributionsData(res.data)
            break;
        }
      } catch (error) {
        console.error(`Error fetching data: ${error}`);
      }
    }

    fetchData()
  }, [username])

  return {
    contributionsData
  }  
}

export default useGitHubContribution