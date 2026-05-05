import { query } from '$lib/server/db.js';
import { fail } from '@sveltejs/kit';

export async function load() {
    try {
        const todos = await query(
            'SELECT * FROM todos ORDER BY created_at DESC'
        );
        return { todos };
    } catch (error) {
        console.error('DB 조회 오류 : ', error);
        return { todos: [], error: '데이터를 불러오는데 실패했습니다.'};
    }
}

// actions: 폼 제출을 처리하는 함수들
//  ?/create , ?/toggle, ?/delete 
export const actions = {
    // 새 todo 추가
    create: async ( {request} ) => {
        const formData = await request.formData();
        const text = formData.get('text')?.toString().trim();

        if(!text) {
            return fail(400, { error: '할 일을 입력해 주세요. '});
        }

        if(text.length > 200) {
            return fail(400, { error: '200자 이내로 입력해 주세요.'} );
        }

        try {
            await query(
                'INSERT INTO todos(text) VALUES(?)', [text]
            );
        } catch (error) {
            console.error('Todo 추가 오류 : ', error);
            return fail(500, { error: '추가에 실패했습니다. 다시 시도해 주세요.'});
        }
    },

    toggle: async ({ request }) => {
        const formData = await request.formData();
        const id = formData.get('id');

        if(!id) {
            return fail(400, { erroor: '잘못된 요청입니다.'});
        }

        try {
            await query('UPDATE todos SET completed = NOT completed WHERE id= ?', [id]);
        } catch (error) {
            console.error('상태 변경 오류: ', error);
            return fail(500, { error: '상태 변경이 실패했습니다.'});
        }
    },
    delete: async ({ request }) => {
        const formData = await request.formData();
        const id = formData.get('id');

        if(!id) {
            return fail(400, { erroor: '잘못된 요청입니다.'});
        }

        try {
            await query('DELETE FROM todos WHERE id = ?', [id]);
        } catch (error) {
            console.error('삭제 오류:', error);
            return fail(500, { error: '삭제에 실패했습니다.'});
        }
    }
}