import Song from './Song';

const SongList = ({songs}) => {

    if(!songs) return null;


    const songInfo = songs.feed.entry

    const songNodes = songInfo.map((song) => {
        return (
            <Song name={song.title.label} />
        )
    });


    return (
        <>
            <h2>Song List</h2>
            <ol>
                {songNodes}
            </ol>    
        </>    
    );
};

export default SongList;


