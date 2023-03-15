import { loremIpsum } from "lorem-ipsum";

const useJson = () => {
    const generateJson = () => {
        const data = [];
        for (let i = 1; i <= 4000; i++) {
          const id = i.toString()
          const photoUrl = `https://picsum.photos/id/${id}/500/500.jpg`
          const text = loremIpsum({
            count: 1,
            units: 'sentences',
            sentenceLowerBound: 5,
            sentenceUpperBound: 5,
            format: 'plain',
            random: Math.random
          });
          data.push({ 
            id, 
            photo: photoUrl, 
            text 
        })
        }
        return data
      }

    return {
        generateJson
    }

}

export default useJson