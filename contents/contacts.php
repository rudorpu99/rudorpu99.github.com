<section id="contacts">
	<h2>Contacts</h2>
	<p class="text-center">제 포트폴리오가 마음에 드셨나요?<br>문의주시면, 최대한 빨리 답변 드릴수 있도록 하겠습니다.<br>모바일로 작성하실 경우 기기를 가로로 눕혀서 사용하시면 작성하시기 좋습니다.</p>
	<form id="contactsForm" name="formmail" method="get" action="/contents/mailData.php" onSubmit="return chkMailFrm()">
	<fieldset>
	<legend class="sr-only">문의 작성 폼</legend>
	<div class="table-responsive">
		<table class="table table-bordered">
		<caption class="sr-only">문의 작성 양식</caption>
		<tbody>
		<tr>
			<th scope="col" class="col-md-2"><label for="name">Name</label></th>
			<td class="col-md-4"><input type="text" class="form-control" id="name" name="senduser" /></td>
			<th scope="col" class="col-md-2"><label for="phone">Phone</label></th>
			<td class="col-md-4"><input type="text" class="form-control" id="phone" name="phone" /></td>
		</tr>
		<tr>
			<th scope="col" class="col-md-2"><label for="e-mail">E-mail</label></th>
			<td class="col-md-4" colspan="3"><input type="text" class="form-control" id="e-mail" name="email" /></td>
		</tr>
		<tr>
			<th scope="col" class="col-md-2"><label for="title">Title</label></th>
			<td class="col-md-4" colspan="3"><input type="text" class="form-control" id="title" name="title" /></td>
		</tr>
		<tr>
			<th scope="col" class="col-md-2"><label for="contents">Contents</label></th>
			<td class="col-md-4" colspan="3"><textarea class="form-control" id="contents" name="body" rows="5"></textarea></td>
		</tr>
		</tbody>
		</table>
	</div>
	<div class="row text-center">
		<button type="submit" class="btn btn-danger btn-lg">보내기</button>
		<button type="reset" class="btn btn-default btn-lg formReset">취소</button>
	</div>
	</fieldset>
	</form>
</section>
