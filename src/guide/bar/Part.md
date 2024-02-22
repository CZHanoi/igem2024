---
title: Part Registry
icon: book-journal-whills
cover: /assets/image/cover2.jpg
author:
- Liyue Chen
---

# Part Registry 学习记录

## 一些基本概念厘清：

Basic Part：DNA最小的功能单元；Composite Part：由几个basic part组成（*其中所有的basic parts都必须在registry中录入过*）；Part collection：是所有parts和composite parts的集合

*所有录入的内容必须符合Bio Brick RFC10和TypeIIS的标准*

## 添加Basic Part：

Tools--Add a part--Add a Basic Part*(字体是黑色的但是点上去会有链接)* *（其他链接找不到的时候也可以试着让鼠标悬停在黑色字体上，总之不要只抓着蓝色的字体试，它不一定是链接）*

### 1、Part Name&Information

<div style="text-align: center;">
<img src="https://i.miji.bid/2024/02/14/0c048a53e343668138d0bdb08f59ef13.png"> <br>
  <div> <p><small style="color: gray">图片为basic part的上传页面</small></p> </div>
</div> 

**Group Name**: iGEM24_Fudan

**Selected Part Name**: 编号从BBa_K4765000 to BBa_K4765999中的一个

**Part Type:**可以选择part的类型*（Hard information page修改）*

**Short Description:** 通常是这个part在生物学上常用的名称或简称*（Hard information page修改）*

**Long Description:**详细描述这个part的功能与要求，它将会显示在Main page上并且可以在那里更改*（可以提前输入基本信息，之后在Main page上添加实验现象等等的其他信息）* 

**Source of this Part:**part的来源*（在Design page修改）*

**Design Considerations:**输入可能对这个part所做的考虑因素(去除限制位点的突变，密码子优化等)*（在Design page修改）*

**Go on to enter the sequence and add feature annotations** 以上表格填写完整后点击

### 2、Sequence and Features

Tools-Edit Sequence and Features

**Add your part's sequence:**点击Edit，将序列复制粘贴入编辑器中之后点击save保存。*（不要把前缀或后缀放进去）*

<div style="text-align: center;">
<img src="https://i.miji.bid/2024/02/14/5ceee47255b862dae477f66000385925.png"> <br>
  <div> <p><small style="color: gray">图片为sequence and features的录入页面</small></p> </div>
</div> 

**Add features to the part:**点击add a feature，特征包括起始/终止密码子、cds、tags .etc

<div style="text-align: center;">
<img src="https://i.miji.bid/2024/02/14/bdd8c18c4cf1c272aed323f8accf142f.png"> <br>
  <div> <p><small style="color: gray">图片为features的编辑页面</small></p> </div>
</div> 
**Assembly Compatibility box:**用于检查录入的part是否符合标准*（一般选择RFC10作为标准）*，绿色框意味着没问题，红色框意味着有这个位点不符合标准，将鼠标悬停在红色框上可以看到具体哪一块有问题，可以根据Assembly Compatibility box的显示结果来判读自己是否需要修改某个位点***（可以在购买序列前用snapgene检测一下）***

如果买到的序列不符合RFC10的要求应该如何录入——蔡老师的回答：我们使用Gibson assemby 所以不需要在乎RFC10，万一买的时候没注意 填写时候做无义突变 

<div style="text-align: center;">
<img src="https://i.miji.bid/2024/02/15/1668fc5337b007d80bc080f75ffff4d1.jpeg"> <br>
  <div> <p><small style="color: gray">iGEM官方对于Assembly Compatibility box的解释以及对于不符合标准的位点的处理方法</small></p> </div>
</div> 

### 3、Hard Information Page

<div style="text-align: center;">
<img src="https://i.miji.bid/2024/02/14/e0a26f9f58cbfabf3bd58346c785132e.png"> <br>
  <div> <p><small style="color: gray">图片为Page Header的编辑页面</small></p> </div>
</div> 

**Part Name/Short Description/Part Type**都不需要再次输入

**Designers:**默认为添加者的名字，但是可以添加更多设计者的名字

**Qualitative Experience:**说明该part是否已经被测试过以及它是否有预想中的作用***（默认有）***

**Group Favourite:**可以把这个part设置成团队最喜欢的part***（可以最后再选是否是favourite）***

**Delete This Part:**可以将这个part删除，注意不要不小心点到

<div style="text-align: center;">
<img src="https://i.miji.bid/2024/02/14/6b7d6db989dd8c5cc90aec967828ffa3.png"> <br>
  <div> <p><small style="color: gray">图片为Page Footer的编辑页面</small></p> </div>
</div> 

**Parameters(参数):**

**Biology:**图中展现的是费氏弧菌的名字，于是我的理解是biology指的是part的来源菌种

**Protein:**这个part所翻译出的蛋白质的名字

**Categories:**为了使录入的part 被安排到registry中合适的位置

Eg:

**//chassis/prokaryote/ecoli** - We will be using and testing the part in E. coli

**//cds** - BBa_T4000 is a protein coding region which codes for luxC

## 添加Composite Part：

Tools--Add a part--Add a Composite Part

### 1、Part Name&Information

<div style="text-align: center;">
<img src="https://i.miji.bid/2024/02/14/df96bf1876ed4ba783dfd6269ee846ed.png"> <br>
  <div> <p><small style="color: gray">图片为composite parts的上传页面</small></p> </div>
</div> 

**Subparts:**输入组成这个composite part的basic part或者composite parts，每个词之间用一个空格隔开。Registry会通过这个部分录入的信息来将所有的序列组合在一起，包括了装配过程中出现的连接序列，如果使用的是无scar的装配方式，可以在后续过程中更改。

### 2、Sequence and Features

Tools-Edit Sequence and Features

<div style="text-align: center;">
<img src="https://i.miji.bid/2024/02/14/27116c7987e4af732af0ab400d6a4718.png"> <br>
  <div> <p><small style="color: gray">图片为sequence and features的编辑页面</small></p> </div>
</div> 

点击右上角的edit可以改变这个part的构成。Composite parts不需要自己输入序列，整个序列由系统通过subparts和scars自动生成，也不需要自己添加features因为它会自己继承组成它的所有部分的features。

### 3、Hard Information Page

<div style="text-align: center;">
<img src="https://i.miji.bid/2024/02/14/a3872b335b74c478f1b51429f33af2aa.png"> <br>
  <div> <p><small style="color: gray">图片为Page Header的编辑页面</small></p> </div>
</div> 

<div style="text-align: center;">
<img src="https://i.miji.bid/2024/02/14/f9a5e7fd44545460fb22471e7bf8ab1c.png"> <br>
  <div> <p><small style="color: gray">图片为Page Footer的编辑页面</small></p> </div>
</div> 

与Basic Part的填写规范相同

## 添加Improved Part 

从以往的part上进行improve，找到了获得2023年best new improved part队伍的一个improved part BBa_K4800008，在录入的页面可以看到它和new part是一样的录入方法，但是在main page上short description下面提及了它是从BBa_K1655000改良而来的。

<div style="text-align: center;">
<img src="https://i.miji.bid/2024/02/15/0816c90f0dd9f3780c06eedcd6c43b15.png"> <br>
  <div> <p><small style="color: gray">K4800008的录入页面与正常的录入页面一致</small></p> </div>
</div>  

<div style="text-align: center;">
<img src="https://i.miji.bid/2024/02/15/2eb32aeb7125429e8ac416317f912531.png"> <br>
  <div> <p><small style="color: gray">edit main page上可以看到在short description下加入了对于它改良前后的对比</small></p> </div>
</div>  

## Assembly Scars

**定义：**scars是将DNA的Parts装配在一起时的副产物，遵循BioBrick RFC10和iGEM Type IIS的规则设计的composite parts中间的scar是可预测的。一些装配系统可以实现无scar的装配，或者有意在subparts之间留下空白。Scars保证了subparts的内容正确以及part的序列是准确的。 ***蔡老师说直接使用User- specified***

在"Edit Sequence and Features"页面上具体说明scar，可以简写也可以写出具体的序列*（用"[]"来指定scars）*。

<div style="text-align: center;">
<img src="https://i.miji.bid/2024/02/14/bd4d60dc1d8329e790341dce04d3b0f0.png"> <br>
  <div> <p><small style="color: gray">图片为Scars的种类</small></p> </div>
</div> 

*大部分情况下scar只是一小段序列，并没有具体的用处，但它会对翻译/转录形成一定的影响*

*Biobrick scars事实上是因为限制位点的切割和连接而构成的一段副产物序列*

## Assemblyly Compatibility

以下的限制位点不被允许

<div style="text-align: center;">
<img src="https://i.miji.bid/2024/02/14/90761e7f92faba7fa028784f36f5d4c7.png"> <br>
  <div> <p><small style="color: gray">图片不被允许的限制位点序列的示例</small></p> </div>
</div> 

https://accounts.google.com/b/0/AddMailService Assembly System Page可以具体地看到需要被符合的标准

## Twins

指的是序列一致的两个part，不可以录入twin！！！

在part的main page上可以看到part status box并且打开Twins Page

## Document parts 

**Part Pages**

***Main Page:***包括了一个part的information、measurement和characterization，所有用户均可以编辑

***Design:***设计的过程，默认包括序列和特征

***Experience:***来自part的使用者的一些信息，包括了它能不能用以及一些其他的深入评论，可以通过别人的使用感受来决定自己是否采用这个part

***Information:***有可编辑的元素，用于在Registry的数据库中对其进行分类和组织。包括了short description、part type、categories、parameters等。作者组的成员能够进行编辑。

***Part tools:***菜单里有很多可以跟part联合使用的各种软件工具

建议的书写规范：

<div style="text-align: center;">
<img src="https://i.miji.bid/2024/02/14/2ce6ea678287176081693cf796dbc7d3.png"> <br>
  <div> <p><small style="color: gray">图片建议的书写规范</small></p> </div>
</div> 

**Usage**

说明在我们的课题中这个part的用处以及它其他可能的运用方式eg:

<div style="text-align: center;">
<img src="https://i.miji.bid/2024/02/14/fc3167eb4cc257efad5ee41584acedd1.png"> <br>
  <div> <p><small style="color: gray">图片一个Usage的示例</small></p> </div>
</div> 

**Biology**

说明这个part的起源、原本的用途以及你的给它安排的作用eg:

<div style="text-align: center;">
<img src="https://i.miji.bid/2024/02/14/6be1fd370fe1e258039d5fb536fdafe1.png"> <br>
  <div> <p><small style="color: gray">图片一个Biology的示例</small></p> </div>
</div> 

**Characterization**

Document的主体基本都是关于部件的表征和测量，注意一定要包括：

测试的目标/假设

详细说明实验的条件和参数，将方法的引用出处写出来

尽量清晰地列举数据

将对照组也写进去！

给图片和表格加上标签

对实验结果进行总结

**Design**

记录下设计时对于part的所有的考量及原因，包括了为了改变限制位点的突变、密码子优化等等。

**References**

包括了你使用到的参考文献以及你认为会对其他用户有帮助的文献。

## Make a Contribution

contribution的意思是一个part的显著进步，被添加在原本part的main page上，也可以把它添加在Experience Page（但并不要求）。eg（只是例子，并不代表评委的评分标准）

<div style="text-align: center;">
<img src="https://i.miji.bid/2024/02/14/9d9353b909704da37c5d86e3e7b0e6fd.png"> <br>
  <div> <p><small style="color: gray">图片contributions的示例</small></p> </div>
</div> 

contribution的格式：

<div style="text-align: center;">
<img src="https://i.miji.bid/2024/02/14/f977d007c62052a99c070db19d48459a.png"> <br>
  <div> <p><small style="color: gray">图片contributions的格式规范</small></p> </div>
</div>  

## Parts的wiki写作

1、wiki上需要突出自己希望可以拿奖的parts，需要引导到registry的页面上

2、要注意wiki写作的逻辑性（eg https://2023.igem.wiki/mcgill/biobricks/），最好对所有的parts根据功能或者是其他特征做一个分类

3、可以在比较重要的地方加入图片辅助描述（eg https://2023.igem.wiki/ucas-china/parts），也可以通过表格的形式整理归纳所有的part

## Media Wiki的语法

目前可以直接view source查看，以下为一个完整的例子：

<div style="text-align: center;">
<img src="https://i.miji.bid/2024/02/15/6a7e63e1802487960bc4fcd8459a1fd3.jpeg"> <br>
  <div> <p><small style="color: gray">一个完整的main page的例子</small></p> </div>
</div>  

1、在main page的view source中有“===Introduction===”，类似的biology、usage等两侧都有三个=，*但是reference两侧只有两个=*

2、自动生成reference：在zotero中保存好论文，打开Microsoft word，在上面菜单中选中Zotero，点击“Add/Edit Citation”，参考文献样式选用American Psychological Association(APA) 7th edition，点击Z选择经典视图，选中所需论文跳转到word页面，点击“Add/Edit Bibliography”即可自动跳出reference。

如何引用：在正文后写<ref>……</ref>，最后在“==References==”下面写<references/>

3、part页面的右侧队标图片语法：在"_ _ NOTOC _ _"与" _ _ TOC _ _ "之间：



4、网页中的填图

<div style="text-align: center;">
<img src="https://i.miji.bid/2024/02/15/1d7ca8268cc9ea5dd914fbb4aa42cb1e.png"> <br>
  <div> <p><small style="color: gray">图片填图的语法</small></p> </div>
</div>  

5、如何在一个part中对另一个part进行引用：

例如BBa_K4765007中写有：It can interact with [https://parts.igem.org/Part:BBa_K4765006 BBa_K4765006]，最后的网页中即可以出现另一个part的超链接，wiki中展示的是网址之后的空格之后的内容

6、part和wiki页面的呼应

<div style="text-align: center;">
<img src="https://i.miji.bid/2024/02/15/0db1db4dd2f9ba4815dbcba7da330a14.png"> <br>
  <div> <p><small style="color: gray">wiki上的写法示例</small></p> </div>
</div>  

##  silly but might be common questions:

1、关于搜索功能

| 问题                                          | 方案                                                         |
| --------------------------------------------- | ------------------------------------------------------------ |
| 知道一个part在iGEM中的编号但知道它的用处/名字 | 可以在BBa_那一栏直接搜索文字或者在search的下拉菜单中跳转google |
| 已经知道了DNA的序列，找它的各种信息           | Tools下拉菜单里有Registry BLAST，可以找到这个basic part或者它在其他composite parts 中的应用 |

2、如何知道具体是哪个part获得了奖项：一般获胜的队伍会在wiki上更新自己的得奖。
