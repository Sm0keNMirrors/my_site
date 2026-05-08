---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Mahro Hektap"
  text: "SmokeNMirrors(Xian Yaohan)' Blog"
  tagline: "not only earthlings dream of weed 不只有地球人会梦见屋旁的青草"
  image:
    src: https://github.com/Sm0keNMirrors.png  # 这里换成你的 GitHub 用户名
    alt: "SmokeNMirrors Avatar"

# features:
#   - title: Feature A
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
#   - title: Feature B
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
#   - title: Feature C
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

<div class="home-section-list">

<section class="home-block">
  <div class="home-block-header">
    <div class="home-card-icon">📚</div>
    <div class="home-block-title">
      <h2>科研成果</h2>
    </div>
    
  </div>

  <!-- <div class="home-card-tags">
    <span>Paper</span>
    <span>Research</span>
    <span>Experiment</span>
  </div> -->

  <div class="home-block-items">
    <PaperCard 
      title="Characterization of winter PM2.5 source contributions and impacts of meteorological conditions and anthropogenic emission changes in the Sichuan Basin, 2002–2020"
      doi="10.1016/j.scitotenv.2024.174557"
      journal="Science of the total environment"
      journalUrl="https://www.sciencedirect.com/journal/science-of-the-total-environment"
      abstract="In this study, the Weather Research and Forecasting (WRF) model and Community Multiscale Air Quality–Integrated Source Apportionment Method (CMAQ–ISAM) were utilized, which were integrated with the Multiresolution Emission Inventory for China (MEIC) emission inventory, to simulate winter PM2.5 concentrations, regional transport, and changes in emission source contributions in the Sichuan basin (SCB) from 2002 to 2020, considering variations in meteorological conditions and anthropogenic emissions. The results indicated a gradual decrease in the basin's winter average PM2.5 concentration from 300 μg/m3 to 120 μg/m3, with the most significant decrease occurring after 2014, reflecting the actual impact of China's air pollution control measures. Spatially, the main pollution area shifted from Chongqing to Chengdu and the western basin. The sources of PM2.5 at the eastern and western margins of the basin have remained stable and have been dominated by local emissions for many years, while the sources of PM2.5 in the central part of the basin have evolved from a multiregional co-influenced source during the early period to a high proportion of local emissions; except for boundary condition sources, residential sources were the main PM2.5 sources in the basin (approximately 29.70 %), followed by industrial sources (approximately 14.11 %). Industrial sources exhibited higher contributions in Chengdu and Chongqing and gradually stabilized with residential sources over the years, while residential sources dominated in the eastern and western parts of the basin and exhibited a declining trend. Meteorological conditions exacerbated pollution in the whole basin from 2008 to 2014, especially in the west (21–40 μg/m3). The eastern basin and Chongqing exhibited more years with alleviated meteorological pollution, including a 40+ μg/m3 decrease in Chongqing from 2002 to 2005. Reduced anthropogenic emissions alleviated annual pollution levels, with a greater reduction (> −20 μg/m3) after 2011 due to pollution control measures."
    />
    <PaperCard 
      title="Source apportionment and formation of warm season ozone pollution in Chengdu based on CMAQ-ISAM"
      doi="10.1016/j.uclim.2024.102017"
      journal="urban Climate"
      journalUrl="https://www.sciencedirect.com/journal/urban-climate"
      abstract="In this study, the WRF-CMAQ model integrated with BEM urban canopy model was used to simulate the concentrations of Ozone (O3) and its precursors, NOx and VOCs, in warm season of Chengdu, conduct source apportionment and formation analysis. The results show that the O3 in Chengdu exhibits a west-high/east-low spatial pattern, attributable to nearly 40% contribution from boundary sources representing the transport role of the Sichuan Basin, regional sources from districts emitting high precursor concentrations, and increasing biogenic contributions from western areas due to rising BVOCs emissions during the warm season. NOx from traffic and VOCs from industrial sources, both prevalent in Chengdu's high urban density areas, chemically react to form O3, making these sectors primary contributors to O3. NOx photochemical reactions producing O3 occur at 150 m–2500 m with peak generation rates of 10 μg/(m3·hr). Ground-level NO titration removal is most significant during heavy traffic (14:00–21:00), ranging from −70 to −200 μg/(m3·hr). O3 is replenished through similar rates of daytime vertical diffusion and nighttime horizontal advection, correlating with urban density across regions. Controlling Chengdu's warm season O3 requires focusing on long-distance external transport and regional precursor emission reductions, with strategies tailored to local urban characteristics."
    />
  </div>

  <!-- <a class="home-card-button" href="/research/">查看全部科研成果</a> -->
</section>


<section class="home-block">
  <div class="home-block-header">
    <div class="home-card-icon">🛠️</div>
    <div class="home-block-title">
      <h2>实用工具</h2>
      <!-- <p>记录我常用的开发工具、科研工具、效率工具和环境配置方案。</p> -->
    </div>
  </div>

  <div class="home-card-tags">
    <span>Tools</span>
    <span>Workflow</span>
    <span>Setup</span>
  </div>

  <div class="home-block-items">
    <a class="home-block-item" href="/tools/dev/">
      <strong>开发环境</strong>
      <span>编辑器、终端、Git、Node、Python 等环境配置。</span>
    </a>
    <a class="home-block-item" href="/tools/research/">
      <strong>科研工具</strong>
      <span>论文管理、实验记录、数据处理和绘图工具。</span>
    </a>
    <a class="home-block-item" href="/tools/workflow/">
      <strong>效率工具</strong>
      <span>任务管理、知识库、自动化脚本和个人工作流。</span>
    </a>
  </div>

  <a class="home-card-button" href="/tools/">查看全部使用工具</a>
</section>

<section class="home-block">
  <div class="home-block-header">
    <div class="home-card-icon">📝</div>
    <div class="home-block-title">
      <h2>笔记资料</h2>
      <!-- <p>整理学习笔记、课程资料、技术文档、阅读记录和知识总结。</p> -->
    </div>
  </div>

  <div class="home-card-tags">
    <span>Notes</span>
    <span>Docs</span>
    <span>Knowledge</span>
  </div>

  <div class="home-block-items">
    <a class="home-block-item" href="/notes/tech/">
      <strong>技术笔记</strong>
      <span>前端、后端、工程化、部署和常用开发问题整理。</span>
    </a>
    <a class="home-block-item" href="/notes/course/">
      <strong>课程资料</strong>
      <span>课程学习过程中的知识点、作业总结和复习提纲。</span>
    </a>
    <a class="home-block-item" href="/notes/reading/">
      <strong>阅读记录</strong>
      <span>书籍、文章、文档的摘要与个人思考。</span>
    </a>
  </div>

  <a class="home-card-button" href="/notes/">查看全部笔记资料</a>
</section>



<section class="home-block">
  <div class="home-block-header">
    <div class="home-card-icon">🎮</div>
    <div class="home-block-title">
      <h2>独立游戏项目</h2>
      <!-- <p>展示个人独立游戏开发项目，包括玩法设计、开发日志和演示版本。</p> -->
    </div>
  </div>

  <div class="home-card-tags">
    <span>Game</span>
    <span>Unity</span>
    <span>Indie</span>
  </div>

  <div class="home-block-items">
    <a class="home-block-item" href="/games/prototype/">
      <strong>玩法原型</strong>
      <span>记录核心机制、关卡概念和交互体验设计。</span>
    </a>
    <a class="home-block-item" href="/games/devlog/">
      <strong>开发日志</strong>
      <span>记录开发过程、技术问题、版本变化和优化思路。</span>
    </a>
    <a class="home-block-item" href="/games/art-audio/">
      <strong>美术与音效</strong>
      <span>整理角色、场景、UI、音效和整体风格探索。</span>
    </a>
  </div>

  <a class="home-card-button" href="/games/">查看全部游戏项目</a>
</section>

</div>
