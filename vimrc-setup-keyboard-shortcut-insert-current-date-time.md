---
layout: layout/main.njk
tags: vim, vimrc, tricks
addAllPagesToCollections: true
---
```
function! InsertCurrentDateTime()
  let l:datetime = system('date "+\%Y-\%m-\%d \%H:\%M:\%S"')[:-2]
  return l:datetime
endfunction

inoremap <C-d> <C-r>=InsertCurrentDateTime()<CR>
```
