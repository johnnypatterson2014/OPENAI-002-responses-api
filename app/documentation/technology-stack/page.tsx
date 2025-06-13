
export default function Home() {
  return (
    <>
      <div className="article-wrapper">

        <div className="article-body-wrapper">

          <div className="article-title">
            Technology Stack
          </div>

          <div className="article-body">

            <p>
              The frameworks and tools used by FESK are 'best-of-breed' technologies. These technologies were chosen for their ability to quickly develop high quality web applications.
            </p>
            <ul className="fesk-content-list">
              <li>Next.js - the most popular web UI javascript/typescript framework. Built on React, Turbopack and Tailwind</li>
              <li>DaisyUI - a CSS plugin built on Tailwind that provides ready-to-use, themeable, easily customizable, UI components</li>
              <li>Springboot - the defacto-standard to create java-based microservices. Springboot has a huge community and can leverage numerous open-source projects. For example, this project uses Spring-Security (for
                oauth2 authentication and jwt token management), and Spring-AI (for java/spring based AI development)</li>
              <li>Docker desktop - for rapid local development, docker compose is used to spin-up the following server services:

                <ul className="fesk-content-list">
                  <li>
                    MySQL - used for local data storage. Note that any type of persistence tool can be used (eg. MongoDB, Postgres, AWS S3, etc)
                  </li>
                  <li>
                    prometheus - collects metrics and open-telemetry data and stores it in a time-series format.
                  </li>
                  <li>
                    grafana - used to visualize data from various sources, as well as provide the abiltiy to query this data.
                  </li>
                  <li>
                    Loki - lightweight (distributed) scaleable logging server. Collects logs and makes them searchable.
                  </li>
                  <li>
                    Tempo/zipkin - collects distributed traces, showing the request journey across services.
                  </li>
                </ul>

              </li>
            </ul>

            <p>
              The following is a simplified version of the high level architecture (click image to enlarge).
            </p>

            <a href="/diagram-001.png" target="_blank">
              <img src='/diagram-001.png' width={790} />
            </a>







          </div>
        </div>
      </div>

    </>
  );
}
