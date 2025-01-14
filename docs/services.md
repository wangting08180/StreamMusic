---
sidebar_position: 2
---

# 音乐服务

就我个人使用体验来讲，目前并不存在完美的音乐服务，它们各有优缺点，需要根据自己的需求酌情选择。

## 支持版本

- Subsonic 1.15.0 及以上
- Navidrome 0.49.3 及以上
- Jellyfin 10.8.10 及以上
- Emby  4.7.14.0 及以上
- AudioStation DSM 6 及以上，支持密码及 OTP 验证码登录

## 音乐相关功能

`-` 未知

|  | Subsonic | Navidrome | Audio Station | Emby | Jellyfin |
| ------- | ------- | ------- | --- | --- | --- |
| 内嵌歌词 |  | ✅ |  | ✅ |  |
| 外置歌词 |  |  | ✅ | ✅ |  |
| 在线歌词 |  |  | ✅ | ✅ |  |
| 歌手简介 | - | ✅ | ✅ | ✅ | ✅ |
| 歌手头像 | - | *<sup>1</sup> | *<sup>2</sup> | ✅ | ✅ |
| 多艺术家 | - |  | - | ✅ | ✅ |
| 回放增益标签 | - | ✅  |  | | |

1. Navidrome 若要显示歌手头像，需要配置 Spotify API，或在歌手文件夹下放一张名为 `artist.*` 的图片。[Artwork location resolution](https://www.navidrome.org/docs/usage/artwork/#artists)
2. Audio Station 的歌手头像用的是音乐库中的专辑图片。