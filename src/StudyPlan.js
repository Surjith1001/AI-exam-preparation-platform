import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './StudyPlan.css'; // Import CSS file

const StudyPlan = () => {
  const location = useLocation();
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const selectedDuration = parseInt(queryParams.get('duration'));


    // Define topics for the entire study plan
    const topics = [
      "Engineering Mathematics",	
      "Discrete Mathematics",
      "Propositional and First-Order Logic",
      "Sets, Relations, Functions, Partial Orders, and Lattices",
      "Monoids, Groups",
      "Graphs: Connectivity, Matching, Coloring",
      "Combinatorics: Counting, Recurrence Relations, Generating Functions",
      "Linear Algebra",
      "Matrices",
      "Determinants",
      "System of Linear Equations",
      "Eigenvalues and Eigenvectors",
      "LU Decomposition",
      "Calculus",
      "Limits, Continuity, and Differentiability",
      "Maxima and Minima",
      "Mean Value Theorem",
      "Integration",
      "Probability and Statistics",
      "Random Variables",
      "Uniform, Normal, Exponential, Poisson, and Binomial Distributions",
      "Mean, Median, Mode, and Standard Deviation",
      "Conditional Probability and Bayes Theorem",
      "Digital Logic and Design",
      "Boolean Algebra",
      "Combinational and Sequential Circuits",
      "Minimization",
      "Number Representations and Computer Arithmetic (Fixed and Floating Point)",
      "Computer Organization and Architecture",
      "Machine Instructions and Addressing Modes",
      "ALU, Data Path, and Control Unit",
      "Instruction Pipelining, Pipeline Hazards",
      "Memory Hierarchy: Cache, Main Memory, and Secondary Storage",
      "I/O Interface (Interrupt and DMA Mode)",
      "Programming and Data Structures",
      "Programming in C",
      "Recursion",
      "Arrays, Stacks, Queues",
      "Linked Lists, Trees, Binary Search Trees, Binary Heaps",
      "Graphs",
      "Algorithms",
      "Searching, Sorting, Hashing",
      "Asymptotic Worst Case Time and Space Complexity",
      "Algorithm Design Techniques: Greedy, Dynamic Programming, and Divide-and-Conquer",
      "Graph Traversals, Minimum Spanning Trees, Shortest Paths",
      "Theory of Computation",
      "Regular Expressions and Finite Automata",
      "Context-Free Grammar and Push-Down Automata",
      "Regular and Context-Free Languages, Pumping Lemma",
      "Turing Machines and Undecidability",
      "Compiler Design",
      "Lexical Analysis",
      "Parsing, Syntax-Directed Translation",
      "Runtime Environments",
      "Intermediate Code Generation",
      "Local Optimization",
      "Data Flow Analyses: Constant Propagation, Liveness Analysis, Common Subexpression Elimination",
      "Operating System",
      "System Calls, Processes, Threads",
      "Inter-Process Communication, Concurrency, and Synchronization",
      "Deadlock",
      "CPU and I/O Scheduling",
      "Memory Management and Virtual Memory",
      "File Systems",
      "Databases",
      "ER-Model",
      "Relational Model: Relational Algebra, Tuple Calculus",
      "SQL",
      "Integrity Constraints, Normal Forms",
      "File Organization, Indexing (e.g., B and B+ Trees)",
      "Transactions and Concurrency Control",
      "Computer Networks",
      "Concept of Layering: OSI and TCP/IP Protocol Stacks",
      "Basics of the Packet, Circuit, and Virtual Circuit Switching",
      "Data Link Layer: Framing, Error Detection, Medium Access Control, Ethernet Bridging",
      "Routing Protocols: Shortest Path, Flooding, Distance Vector, and Link State Routing",
      "Fragmentation and IP Addressing, IPv4, CIDR Notation",
      "Basics of IP Support Protocols (ARP, DHCP, ICMP), Network Address Translation (NAT)",
      "Transport Layer: Flow Control and Congestion Control, UDP, TCP, Sockets",
      "Application Layer Protocols: DNS, SMTP, HTTP, FTP, Email",
      "Verbal Aptitude",
      "Basic English Grammar: Tenses, Articles, Adjectives, Prepositions, Conjunctions, Verb-noun Agreement, and Other Parts of Speech",
      "Basic Vocabulary: Words, Idioms, and Phrases in Context",
      "Reading and Comprehension",
      "Narrative Sequencing",
      "Quantitative Aptitude",
      "Data interpretation: Data Graphs (Bar Graphs, Pie Charts, and Other Graphs Representing Data), 2- and 3-dimensional Plots, Maps, and Tables",
      "Numerical Computation and Estimation: Ratios, Percentages, Powers, Exponents, Exponents Formula, and Logarithms, Logarithm Formula, Permutations and Combinations, and Series",
      "Mensuration and Geometry, Elementary Statistics and Probability",
      "Analytical Aptitude",
      "Deduction and Induction, Analogy, Numerical Relations, and Reasoning",
      "Spatial Aptitude",
      "Transformation of shapes: Translation, Rotation, Scaling, Mirroring, Assembling, and Grouping",
      "Paper Folding, Cutting, and Patterns in 2 and 3 Dimensions"
    ];

    const topicsPerMonth = Math.ceil(topics.length / selectedDuration);

    // Generate the study plan based on the selected duration
    const generatedSchedule = [];
    let topicIndex = 0;
    for (let i = 0; i < selectedDuration; i++) {
      const monthTopics = topics.slice(topicIndex, topicIndex + topicsPerMonth);
      generatedSchedule.push({ month: `Month ${i + 1}`, topics: monthTopics });
      topicIndex += topicsPerMonth;
    }

    setSchedule(generatedSchedule);
  }, [location.search]);

  return (
    <div className="container">
      <h2 className="title">Study Plan</h2>
      <ul className="schedule">
        {/* Render the dynamically generated schedule */}
        {schedule.map((month, index) => (
          <li key={index} className="month">
            <h3>{month.month}</h3>
            <ul className="topics">
              {month.topics.map((topic, topicIndex) => (
                <li key={topicIndex} className="topic">{topic}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudyPlan;