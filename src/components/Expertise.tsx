import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import SolidityIcon, { PowerIcon, NetIcon } from './CustomIcons.jsx'; // Percorso delle tue icone
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Power Apps",
    "Power BI",
    "Power Automate",
    "Sharepoint",
    "Dataverse",
    "SAP",
    "MS Admin Center",
    "Azure Devops",
    "XML Toolbox",
    "SQL",
];

const labelsSecond = [
    "C#",
    "React",
    "Git",
    "Insomnia",
    "SQL server management studio",
];

const labelsThird = [
    "Solidity",
    "Javascript",
    "Truffle",
    "Remix IDE",
    "Open Zeppelin",
    "Metamask",
    "Ganache",
    "Infura",
    "Uniswap API"
];

function Expertise({ isDarkMode }: { isDarkMode: boolean }) {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <PowerIcon isDarkMode={isDarkMode} />
                    <h3>Power Platform Architect</h3>
                    <p>                   
                    I specialize in building applications with Power Apps and Power Automate, leveraging SharePoint and Dataverse for data management while using Azure DevOps for efficient development workflows. I create Power BI reports, seamlessly integrating them with apps or migrating from QlikView.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <NetIcon isDarkMode={isDarkMode} />
                    <h3>Full Stack Developer</h3>
                    <p>
                    I served as the Lead Developer for a freight order management project using C#. 
                    My contributions included resolving numerous bugs and implementing enhancements related 
                    to various libraries, such as Quartz and SignalR. 
                    Additionally, I developed parts of the frontend using React for some of these features.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <SolidityIcon isDarkMode={isDarkMode}/>
                    <h3>Freelance Smart Contract Developer</h3>
                    <p>
                    I developed custom smart contracts in Solidity for Fiverr clients to finance my university education. I initially used Remix IDE and later advanced to Truffle. I have gained strong proficiency in creating ERC-20, ERC-721, and ERC-1155 tokens, staking, helpers, and proxy contracts.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;