import{_ as e,c as d,f as n,o}from"./app-DmwaTO4H.js";const c={};function l(r,t){return o(),d("div",null,t[0]||(t[0]=[n('<p>插件的命令和权限列表</p><div class="hint-container info"><p class="hint-container-title">&quot;/dm open&quot;是管理员命令，普通玩家不应该用它来打开菜单。应该为每个菜单设置“open_command”（打开命令）</p></div><h2 id="命令" tabindex="-1"><a class="header-anchor" href="#命令"><span>命令</span></a></h2><table><thead><tr><th>命令</th><th>权限</th><th>描述</th></tr></thead><tbody><tr><td><code>/dm</code></td><td>-</td><td>显示插件的一些信息</td></tr><tr><td><code>/dm open &lt;menu&gt;</code></td><td><code>deluxemenus.open</code></td><td>打开指定的菜单</td></tr><tr><td><code>/dm open &lt;menu&gt; &lt;player&gt;</code></td><td><code>deluxemenus.open.others</code></td><td>为指定玩家打开指定的菜单</td></tr><tr><td><code>/dm open &lt;menu&gt; -p:&lt;target&gt;</code></td><td><code>deluxemenus.placeholdersfor</code></td><td>打开指定菜单，菜单中的变量将解析为目标玩家的数据</td></tr><tr><td><code>/dm open &lt;menu&gt; &lt;viewer&gt; -p:&lt;target&gt;</code></td><td><code>deluxemenus.placeholdersfor</code></td><td>为指定玩家打开菜单，但变量将解析为目标玩家的数据</td></tr><tr><td><code>/dm list</code></td><td><code>deluxemenus.list</code></td><td>列出已加载的菜单</td></tr><tr><td><code>/dm execute &lt;player&gt; &lt;action&gt;</code></td><td>需要玩家是Op</td><td>让某个玩家执行某个动作</td></tr><tr><td><code>/dm dump &lt;menu-name&gt;</code></td><td><code>deluxemenus.admin</code></td><td>输出某个菜单的调试信息（如服务器版本、Java版本）</td></tr><tr><td><code>/dm dump config</code></td><td><code>deluxemenus.admin</code></td><td>输出config.yml和其他调试信息（如服务器版本、Java版本）</td></tr><tr><td><code>/dm reload</code></td><td><code>deluxemenus.reload</code></td><td>重载插件文件</td></tr><tr><td><code>/dm reload &lt;menu&gt;</code></td><td><code>deluxemenus.reload</code></td><td>重载指定菜单</td></tr></tbody></table><h2 id="命令别名" tabindex="-1"><a class="header-anchor" href="#命令别名"><span>命令别名</span></a></h2><ul><li><code>/deluxemenus</code></li><li><code>/deluxemenu</code></li><li><code>/dmenu</code></li></ul><h2 id="权限" tabindex="-1"><a class="header-anchor" href="#权限"><span>权限</span></a></h2><table><thead><tr><th>权限</th><th>描述</th></tr></thead><tbody><tr><td><code>deluxemenus.openrequirement.bypass.*</code></td><td>绕过所有菜单的打开要求</td></tr><tr><td><code>deluxemenus.openrequirement.bypass.&lt;menu&gt;</code></td><td>绕过指定菜单的打开要求</td></tr><tr><td><code>deluxemenus.placeholdersfor.exempt</code></td><td>阻止其他玩家在命令 <code>/DM Open &lt;Menu&gt; -p:&lt;You&gt;</code> 中将你用作目标</td></tr></tbody></table><div class="hint-container info"><p class="hint-container-title">小于号和大于号(&lt;&gt;) 之间的所有文本都是占位符/变量，请用不带小于号和大于号(&lt;&gt;) 的值替换。</p></div>',9)]))}const m=e(c,[["render",l],["__file","Commands.html.vue"]]),i=JSON.parse('{"path":"/plugins/plugins/deluxe_menus/Commands.html","title":"命令和权限","lang":"zh-CN","frontmatter":{"title":"命令和权限","description":"插件的命令和权限列表 \\"/dm open\\"是管理员命令，普通玩家不应该用它来打开菜单。应该为每个菜单设置“open_command”（打开命令） 命令 命令别名 /deluxemenus /deluxemenu /dmenu 权限 小于号和大于号(<>) 之间的所有文本都是占位符/变量，请用不带小于号和大于号(<>) 的值替换。","head":[["meta",{"property":"og:url","content":"https://bukkit.wiki/plugins/plugins/deluxe_menus/Commands.html"}],["meta",{"property":"og:site_name","content":"BukkitWiki"}],["meta",{"property":"og:title","content":"命令和权限"}],["meta",{"property":"og:description","content":"插件的命令和权限列表 \\"/dm open\\"是管理员命令，普通玩家不应该用它来打开菜单。应该为每个菜单设置“open_command”（打开命令） 命令 命令别名 /deluxemenus /deluxemenu /dmenu 权限 小于号和大于号(<>) 之间的所有文本都是占位符/变量，请用不带小于号和大于号(<>) 的值替换。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-19T14:03:28.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-19T14:03:28.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"命令和权限\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-19T14:03:28.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"命令","slug":"命令","link":"#命令","children":[]},{"level":2,"title":"命令别名","slug":"命令别名","link":"#命令别名","children":[]},{"level":2,"title":"权限","slug":"权限","link":"#权限","children":[]}],"git":{"createdTime":1726754608000,"updatedTime":1726754608000,"contributors":[{"name":"dakuo","email":"1520622465@qq.com","commits":1}]},"readingTime":{"minutes":1.18,"words":355},"filePathRelative":"plugins/plugins/deluxe_menus/Commands.md","localizedDate":"2024年9月19日","excerpt":"<p>插件的命令和权限列表</p>\\n<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">\\"/dm open\\"是管理员命令，普通玩家不应该用它来打开菜单。应该为每个菜单设置“open_command”（打开命令）</p>\\n</div>\\n<h2>命令</h2>\\n<table>\\n<thead>\\n<tr>\\n<th>命令</th>\\n<th>权限</th>\\n<th>描述</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td><code>/dm</code></td>\\n<td>-</td>\\n<td>显示插件的一些信息</td>\\n</tr>\\n<tr>\\n<td><code>/dm open &lt;menu&gt;</code></td>\\n<td><code>deluxemenus.open</code></td>\\n<td>打开指定的菜单</td>\\n</tr>\\n<tr>\\n<td><code>/dm open &lt;menu&gt; &lt;player&gt;</code></td>\\n<td><code>deluxemenus.open.others</code></td>\\n<td>为指定玩家打开指定的菜单</td>\\n</tr>\\n<tr>\\n<td><code>/dm open &lt;menu&gt; -p:&lt;target&gt;</code></td>\\n<td><code>deluxemenus.placeholdersfor</code></td>\\n<td>打开指定菜单，菜单中的变量将解析为目标玩家的数据</td>\\n</tr>\\n<tr>\\n<td><code>/dm open &lt;menu&gt; &lt;viewer&gt; -p:&lt;target&gt;</code></td>\\n<td><code>deluxemenus.placeholdersfor</code></td>\\n<td>为指定玩家打开菜单，但变量将解析为目标玩家的数据</td>\\n</tr>\\n<tr>\\n<td><code>/dm list</code></td>\\n<td><code>deluxemenus.list</code></td>\\n<td>列出已加载的菜单</td>\\n</tr>\\n<tr>\\n<td><code>/dm execute &lt;player&gt; &lt;action&gt;</code></td>\\n<td>需要玩家是Op</td>\\n<td>让某个玩家执行某个动作</td>\\n</tr>\\n<tr>\\n<td><code>/dm dump &lt;menu-name&gt;</code></td>\\n<td><code>deluxemenus.admin</code></td>\\n<td>输出某个菜单的调试信息（如服务器版本、Java版本）</td>\\n</tr>\\n<tr>\\n<td><code>/dm dump config</code></td>\\n<td><code>deluxemenus.admin</code></td>\\n<td>输出config.yml和其他调试信息（如服务器版本、Java版本）</td>\\n</tr>\\n<tr>\\n<td><code>/dm reload</code></td>\\n<td><code>deluxemenus.reload</code></td>\\n<td>重载插件文件</td>\\n</tr>\\n<tr>\\n<td><code>/dm reload &lt;menu&gt;</code></td>\\n<td><code>deluxemenus.reload</code></td>\\n<td>重载指定菜单</td>\\n</tr>\\n</tbody>\\n</table>","autoDesc":true}');export{m as comp,i as data};
