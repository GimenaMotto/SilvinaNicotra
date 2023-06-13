import React from "react";
import ReactPlayer from "react-player";
import { Grid, Typography } from "@mui/material";

const videos = [
    {
        url: "https://www.youtube.com/watch?v=iTj0Sn0WD6Q",
        title: "Video 1",
    },
    {
        url: "https://www.youtube.com/watch?v=IAsoAR9E82U",
        title: "Video 2",
    },
    {
        url: "https://www.youtube.com/watch?v=nXPmWRap3qc",
        title: "Video 3",
    },
    {
        url: "https://www.youtube.com/watch?v=xjdykwUUhVE",
        title: "Video 4",
    },
    {
        url: "https://www.youtube.com/watch?v=q50KocES_0g",
        title: "Video 5",
    },
];

const Audiovisual = () => {
    return (
        <div style={{ margin: "110px" }}>
            <Typography variant="h5" style={{ marginBottom: "26px" }}>
                Participación en cámara en los siguientes vídeos y cortos:
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={6} style={{ marginBottom: "36px" }}>
                    <div style={{ position: "relative", paddingTop: "56.25%" }}>
                        <ReactPlayer
                            url={videos[0].url}
                            width="100%"
                            height="100%"
                            style={{ position: "absolute", top: 0, left: 0 }}
                            controls
                        />
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={6} style={{ marginBottom: "36px" }}>
                    <div style={{ position: "relative", paddingTop: "56.25%" }}>
                        <ReactPlayer
                            url={videos[1].url}
                            width="100%"
                            height="100%"
                            style={{ position: "absolute", top: 0, left: 0 }}
                            controls
                        />
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={6} style={{ marginBottom: "36px" }}>
                    <div style={{ position: "relative", paddingTop: "56.25%" }}>
                        <ReactPlayer
                            url={videos[2].url}
                            width="100%"
                            height="100%"
                            style={{ position: "absolute", top: 0, left: 0 }}
                            controls
                        />
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={6} style={{ marginBottom: "36px" }}>
                    <div style={{ position: "relative", paddingTop: "56.25%" }}>
                        <ReactPlayer
                            url={videos[3].url}
                            width="100%"
                            height="100%"
                            style={{ position: "absolute", top: 0, left: 0 }}
                            controls
                        />
                    </div>
                </Grid>
                <Grid item xs={12} style={{ display: "flex", justifyContent: "center" }}>
                    <div style={{ position: "relative", paddingTop: "56.25%", maxWidth: "100%" }}>
                        <ReactPlayer
                            url={videos[4].url}
                            width="100%"
                            height="100%"
                            style={{ position: "absolute", top: 0, left: 0 }}
                            controls
                        />
                    </div>

                </Grid>
            </Grid>
        </div >
    );
};

export default Audiovisual;
// import React from "react";
// import YouTube from "react-youtube";
// import { Grid, Typography } from "@mui/material";

// const videos = [
//     {
//         id: "iTj0Sn0WD6Q",
//         title: "Video 1",
//     },
//     {
//         id: "IAsoAR9E82U",
//         title: "Video 2",
//     },
//     {
//         id: "nXPmWRap3qc",
//         title: "Video 3",
//     },
//     {
//         id: "xjdykwUUhVE",
//         title: "Video 4",
//     },
//     {
//         id: "q50KocES_0g",
//         title: "Video 5",
//     },
// ];

// const Audiovisual = () => {
//     return (
//         <div style={{ margin: "110px" }}>
//             <Typography variant="h5" style={{ marginBottom: "26px" }}>
//                 Participación en cámara en los siguientes vídeos y cortos:
//             </Typography>
//             <Grid container spacing={2}>
//                 {videos.map((video, index) => (
//                     <Grid item xs={12} sm={6} md={index === 4 ? 12 : 6} key={video.id} style={{ marginBottom: "36px" }}>

//                         <YouTube videoId={video.id} />
//                     </Grid>
//                 ))}
//             </Grid>
//         </div>
//     );
// };

// export default Audiovisual;
