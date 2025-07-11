import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import floraUlyssesImage from "@assets/p18163076_v_h8_ah_1752231908563.jpg";
import moana2Image from "@assets/compose_1752231966148.webp";
import disneyProjectGraphic from "@/assets/disney-project-graphic.svg";

export default function Projects() {
  const projects = [
    {
      title: "Moana 2 (2024)",
      description: "Successfully delivered all new characters for Disney's highly anticipated sequel with a newly hired team of 30 artists while learning the modern Disney animation pipeline.",
      image: moana2Image,
      tags: ["Disney Animation", "Character Development", "Team Leadership"],
      link: "https://www.imdb.com/title/tt13622970/?ref_=nv_sr_srsg_0_tt_7_nm_1_in_0_q_moana%25202"
    },
    {
      title: "Unannounced Disney Project (2025)",
      description: "Currently coordinating production for an upcoming Disney animated feature, managing complex workflows and interdepartmental communication.",
      image: disneyProjectGraphic,
      tags: ["Disney Animation", "Production Management", "Confidential"]
    },
    {
      title: "EA Motion Capture (2019-2021)",
      description: "Organized and produced data recording sessions at EA for head scanning, motion capture, DCAM and performance capture. Supported major game titles including FIFA, NHL, UFC, Dragon Age, Madden, Sims, Skate and PGA.",
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNmMWY1ZjkiLz4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZWFHcmFkaWVudCIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMxZTNhOGEiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMzc0MWQ4Ii8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8IS0tIE1vdGlvbiBDYXB0dXJlIFN0YWdlIC0tPgogIDxyZWN0IHg9IjUwIiB5PSI1MCIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9InVybCgjZWFHcmFkaWVudCkiIHJ4PSIxMCIvPgogIDwhLS0gQ2FtZXJhcyAtLT4KICA8Y2lyY2xlIGN4PSI4MCIgY3k9IjgwIiByPSI4IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiNkMWQ1ZGIiIHN0cm9rZS13aWR0aD0iMiIvPgogIDxjaXJjbGUgY3g9IjMyMCIgY3k9IjgwIiByPSI4IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiNkMWQ1ZGIiIHN0cm9rZS13aWR0aD0iMiIvPgogIDxjaXJjbGUgY3g9IjgwIiBjeT0iMjIwIiByPSI4IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiNkMWQ1ZGIiIHN0cm9rZS13aWR0aD0iMiIvPgogIDxjaXJjbGUgY3g9IjMyMCIgY3k9IjIyMCIgcj0iOCIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjZDFkNWRiIiBzdHJva2Utd2lkdGg9IjIiLz4KICA8IS0tIFBlcmZvcm1lciAtLT4KICA8Y2lyY2xlIGN4PSIyMDAiIGN5PSIxMjAiIHI9IjE1IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiNkMWQ1ZGIiIHN0cm9rZS13aWR0aD0iMiIvPgogIDxyZWN0IHg9IjE5NSIgeT0iMTM1IiB3aWR0aD0iMTAiIGhlaWdodD0iMzAiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iI2QxZDVkYiIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgPHJlY3QgeD0iMTkwIiB5PSIxNjUiIHdpZHRoPSI4IiBoZWlnaHQ9IjIwIiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiNkMWQ1ZGIiIHN0cm9rZS13aWR0aD0iMiIvPgogIDxyZWN0IHg9IjIwMiIgeT0iMTY1IiB3aWR0aD0iOCIgaGVpZ2h0PSIyMCIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjZDFkNWRiIiBzdHJva2Utd2lkdGg9IjIiLz4KICA8IS0tIE1vdGlvbiBDYXB0dXJlIERvdHMgLS0+CiAgPGNpcmNsZSBjeD0iMTkwIiBjeT0iMTIwIiByPSIzIiBmaWxsPSIjMDBmZjAwIi8+CiAgPGNpcmNsZSBjeD0iMjEwIiBjeT0iMTIwIiByPSIzIiBmaWxsPSIjMDBmZjAwIi8+CiAgPGNpcmNsZSBjeD0iMjAwIiBjeT0iMTEwIiByPSIzIiBmaWxsPSIjMDBmZjAwIi8+CiAgPGNpcmNsZSBjeD0iMjAwIiBjeT0iMTMwIiByPSIzIiBmaWxsPSIjMDBmZjAwIi8+CiAgPGNpcmNsZSBjeD0iMTk1IiBjeT0iMTQ1IiByPSIzIiBmaWxsPSIjMDBmZjAwIi8+CiAgPGNpcmNsZSBjeD0iMjA1IiBjeT0iMTQ1IiByPSIzIiBmaWxsPSIjMDBmZjAwIi8+CiAgPCEtLSBHYW1lIExvZ29zIC0tPgogIDx0ZXh0IHg9IjIwMCIgeT0iMjcwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjMWUzYThhIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTgiIGZvbnQtd2VpZ2h0PSJib2xkIj5FQSBNb3Rpb24gQ2FwdHVyZTwvdGV4dD4KICA8dGV4dCB4PSIyMDAiIHk9IjI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzY0NzQ4YiIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIj5GaWZhLCBOSEwsIFVGQywgRHJhZ29uIEFnZSAmIE1vcmU8L3RleHQ+Cjwvc3ZnPgo=",
      tags: ["EA Sports", "Motion Capture", "Data Production", "Gaming"]
    },
    {
      title: "Mr. James is Dead (2020)",
      description: "Produced an independent short film in 8 weeks with all the challenging elements typically avoided in scripts: fake firearms, action choreography, and kids' schedules. An incredible rushed challenge that provided extensive learning opportunities.",
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiMyMzI2MzMiLz4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZmlsbUdyYWRpZW50IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzM3NDE0MSIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiM2Mzc0OGIiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDwhLS0gRmlsbSBTdHJpcCBCYWNrZ3JvdW5kIC0tPgogIDxyZWN0IHg9IjAiIHk9IjMwIiB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwIiBmaWxsPSJ1cmwoI2ZpbG1HcmFkaWVudCkiLz4KICA8cmVjdCB4PSIwIiB5PSIyMzAiIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAiIGZpbGw9InVybCgjZmlsbUdyYWRpZW50KSIvPgogIDwhLS0gRmlsbSBTdHJpcCBIb2xlcyAtLT4KICA8Zz4KICAgIDxyZWN0IHg9IjEwIiB5PSI0MCIgd2lkdGg9IjE1IiBoZWlnaHQ9IjIwIiByeD0iMiIgZmlsbD0iIzIzMjYzMyIvPgogICAgPHJlY3QgeD0iNDAiIHk9IjQwIiB3aWR0aD0iMTUiIGhlaWdodD0iMjAiIHJ4PSIyIiBmaWxsPSIjMjMyNjMzIi8+CiAgICA8cmVjdCB4PSI3MCIgeT0iNDAiIHdpZHRoPSIxNSIgaGVpZ2h0PSIyMCIgcng9IjIiIGZpbGw9IiMyMzI2MzMiLz4KICAgIDxyZWN0IHg9IjEwMCIgeT0iNDAiIHdpZHRoPSIxNSIgaGVpZ2h0PSIyMCIgcng9IjIiIGZpbGw9IiMyMzI2MzMiLz4KICAgIDxyZWN0IHg9IjEzMCIgeT0iNDAiIHdpZHRoPSIxNSIgaGVpZ2h0PSIyMCIgcng9IjIiIGZpbGw9IiMyMzI2MzMiLz4KICAgIDxyZWN0IHg9IjE2MCIgeT0iNDAiIHdpZHRoPSIxNSIgaGVpZ2h0PSIyMCIgcng9IjIiIGZpbGw9IiMyMzI2MzMiLz4KICAgIDxyZWN0IHg9IjE5MCIgeT0iNDAiIHdpZHRoPSIxNSIgaGVpZ2h0PSIyMCIgcng9IjIiIGZpbGw9IiMyMzI2MzMiLz4KICAgIDxyZWN0IHg9IjIyMCIgeT0iNDAiIHdpZHRoPSIxNSIgaGVpZ2h0PSIyMCIgcng9IjIiIGZpbGw9IiMyMzI2MzMiLz4KICAgIDxyZWN0IHg9IjI1MCIgeT0iNDAiIHdpZHRoPSIxNSIgaGVpZ2h0PSIyMCIgcng9IjIiIGZpbGw9IiMyMzI2MzMiLz4KICAgIDxyZWN0IHg9IjI4MCIgeT0iNDAiIHdpZHRoPSIxNSIgaGVpZ2h0PSIyMCIgcng9IjIiIGZpbGw9IiMyMzI2MzMiLz4KICAgIDxyZWN0IHg9IjMxMCIgeT0iNDAiIHdpZHRoPSIxNSIgaGVpZ2h0PSIyMCIgcng9IjIiIGZpbGw9IiMyMzI2MzMiLz4KICAgIDxyZWN0IHg9IjM0MCIgeT0iNDAiIHdpZHRoPSIxNSIgaGVpZ2h0PSIyMCIgcng9IjIiIGZpbGw9IiMyMzI2MzMiLz4KICAgIDxyZWN0IHg9IjM3MCIgeT0iNDAiIHdpZHRoPSIxNSIgaGVpZ2h0PSIyMCIgcng9IjIiIGZpbGw9IiMyMzI2MzMiLz4KICA8L2c+CiAgPGc+CiAgICA8cmVjdCB4PSIxMCIgeT0iMjQwIiB3aWR0aD0iMTUiIGhlaWdodD0iMjAiIHJ4PSIyIiBmaWxsPSIjMjMyNjMzIi8+CiAgICA8cmVjdCB4PSI0MCIgeT0iMjQwIiB3aWR0aD0iMTUiIGhlaWdodD0iMjAiIHJ4PSIyIiBmaWxsPSIjMjMyNjMzIi8+CiAgICA8cmVjdCB4PSI3MCIgeT0iMjQwIiB3aWR0aD0iMTUiIGhlaWdodD0iMjAiIHJ4PSIyIiBmaWxsPSIjMjMyNjMzIi8+CiAgICA8cmVjdCB4PSIxMDAiIHk9IjI0MCIgd2lkdGg9IjE1IiBoZWlnaHQ9IjIwIiByeD0iMiIgZmlsbD0iIzIzMjYzMyIvPgogICAgPHJlY3QgeD0iMTMwIiB5PSIyNDAiIHdpZHRoPSIxNSIgaGVpZ2h0PSIyMCIgcng9IjIiIGZpbGw9IiMyMzI2MzMiLz4KICAgIDxyZWN0IHg9IjE2MCIgeT0iMjQwIiB3aWR0aD0iMTUiIGhlaWdodD0iMjAiIHJ4PSIyIiBmaWxsPSIjMjMyNjMzIi8+CiAgICA8cmVjdCB4PSIxOTAiIHk9IjI0MCIgd2lkdGg9IjE1IiBoZWlnaHQ9IjIwIiByeD0iMiIgZmlsbD0iIzIzMjYzMyIvPgogICAgPHJlY3QgeD0iMjIwIiB5PSIyNDAiIHdpZHRoPSIxNSIgaGVpZ2h0PSIyMCIgcng9IjIiIGZpbGw9IiMyMzI2MzMiLz4KICAgIDxyZWN0IHg9IjI1MCIgeT0iMjQwIiB3aWR0aD0iMTUiIGhlaWdodD0iMjAiIHJ4PSIyIiBmaWxsPSIjMjMyNjMzIi8+CiAgICA8cmVjdCB4PSIyODAiIHk9IjI0MCIgd2lkdGg9IjE1IiBoZWlnaHQ9IjIwIiByeD0iMiIgZmlsbD0iIzIzMjYzMyIvPgogICAgPHJlY3QgeD0iMzEwIiB5PSIyNDAiIHdpZHRoPSIxNSIgaGVpZ2h0PSIyMCIgcng9IjIiIGZpbGw9IiMyMzI2MzMiLz4KICAgIDxyZWN0IHg9IjM0MCIgeT0iMjQwIiB3aWR0aD0iMTUiIGhlaWdodD0iMjAiIHJ4PSIyIiBmaWxsPSIjMjMyNjMzIi8+CiAgICA8cmVjdCB4PSIzNzAiIHk9IjI0MCIgd2lkdGg9IjE1IiBoZWlnaHQ9IjIwIiByeD0iMiIgZmlsbD0iIzIzMjYzMyIvPgogIDwvZz4KICA8IS0tIENhbWVyYSAtLT4KICA8Zz4KICAgIDxyZWN0IHg9IjE2MCIgeT0iMTEwIiB3aWR0aD0iODAiIGhlaWdodD0iNDAiIHJ4PSI1IiBmaWxsPSIjM2I0MjQ5IiBzdHJva2U9IiM2Mzc0OGIiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPGNpcmNsZSBjeD0iMjAwIiBjeT0iMTMwIiByPSIyMCIgZmlsbD0iIzFmMjkzNyIgc3Ryb2tlPSIjNjM3NDhiIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxjaXJjbGUgY3g9IjIwMCIgY3k9IjEzMCIgcj0iMTIiIGZpbGw9IiMxZTNhOGEiLz4KICAgIDxyZWN0IHg9IjE3MCIgeT0iMTAwIiB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHJ4PSIyIiBmaWxsPSIjMzc0MWQ4Ii8+CiAgPC9nPgogIDx0ZXh0IHg9IjIwMCIgeT0iMjAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjZmZmZmZmIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjAiIGZvbnQtd2VpZ2h0PSJib2xkIj5NUi4gSkFNRVMgSVMgREVBRDwvdGV4dD4KICA8dGV4dCB4PSIyMDAiIHk9IjIyMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzljYTNhZiIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIj5JbmRlcGVuZGVudCBTaG9ydCBGaWxtIDIwMjA8L3RleHQ+Cjwvc3ZnPgo=",
      tags: ["Independent Film", "Producer", "Action", "Short Film"]
    },
    {
      title: "Flora and Ulysses (2020)",
      description: "Contributed to Disney+ original film production, gaining experience in streaming platform content development and delivery.",
      image: floraUlyssesImage,
      tags: ["Disney+", "Live Action", "Streaming"]
    }
  ];

  return (
    <section id="writing" className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">Featured Projects</h2>
          <p className="text-xl text-slate-600">Key productions and achievements in entertainment industry</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-white hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-56 object-contain group-hover:scale-105 transition-all duration-300 hover:brightness-110 bg-gradient-to-br from-blue-50 to-purple-50"
                    />
                  </a>
                ) : (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-56 object-contain group-hover:scale-105 transition-all duration-300 hover:brightness-110 bg-gradient-to-br from-blue-50 to-purple-50"
                  />
                )}
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-3">
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>
                <p className="text-slate-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant={tagIndex === 0 ? "default" : "secondary"}
                      className={tagIndex === 0 ? "bg-purple-600" : "bg-orange-500"}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
